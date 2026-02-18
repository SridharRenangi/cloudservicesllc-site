import feedparser
import os
from datetime import datetime

# You can add more RSS feeds here as you grow
FEEDS = ["https://aws.amazon.com/about-aws/whats-new/recent/feed/"]

def update_blog():
    # Ensures the blog folder exists
    os.makedirs("blog", exist_ok=True)
    
    for url in FEEDS:
        feed = feedparser.parse(url)
        # Get the 3 latest announcements
        for entry in feed.entries[:3]:
            # Create a URL-friendly name for the file
            slug = "".join(x for x in entry.title if x.isalnum() or x in " -").strip().replace(" ", "-").lower()
            date_str = datetime.now().strftime('%Y-%m-%d')
            filename = f"blog/{date_str}-{slug[:30]}.md"

            # Only create the file if it doesn't already exist
            if not os.path.exists(filename):
                with open(filename, "w") as f:
                    # Metadata for your website to read
                    f.write(f"---\ntitle: \"{entry.title}\"\ndate: \"{date_str}\"\n---\n\n")
                    # The actual content
                    f.write(f"# {entry.title}\n\n{entry.summary}\n\n[Read original post]({entry.link})")
                print(f"Created: {filename}")

if __name__ == "__main__":
    update_blog()