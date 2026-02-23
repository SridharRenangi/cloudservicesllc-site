import feedparser
import os
import hashlib
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
            published = getattr(entry, "published_parsed", None) or getattr(entry, "updated_parsed", None)
            if published:
                date_str = datetime(*published[:6]).strftime('%Y-%m-%d')
            else:
                date_str = datetime.now().strftime('%Y-%m-%d')

            # Create a URL-friendly name for the file
            slug = "".join(x for x in entry.title if x.isalnum() or x in " -").strip().replace(" ", "-").lower()
            if not slug:
                slug = "post"
            unique_source = getattr(entry, "id", None) or getattr(entry, "link", None) or entry.title
            unique_hash = hashlib.sha1(unique_source.encode("utf-8")).hexdigest()[:6]
            filename = f"blog/{date_str}-{slug[:30]}-{unique_hash}.md"

            # Only create the file if it doesn't already exist
            if not os.path.exists(filename):
                with open(filename, "w") as f:
                    # Metadata for your website to read
                    f.write(f"---\ntitle: \"{entry.title}\"\ndate: \"{date_str}\"\n---\n\n")
                    # The actual content
                    f.write(f"# {entry.title}\n\n{entry.summary}\n\n[Read original post]({entry.link})")
                print(f"Created: {filename}")

def update_sitemap():
    """Generates a sitemap.xml for SEO based on existing files."""
    base_url = "https://cloudservicesllc.org"
    core_pages = ["index.html", "projects.html", "blog.html", "contact.html"]
    
    # Get all markdown files created by the bot
    try:
        blog_files = [f for f in os.listdir('blog') if f.endswith('.md')]
    except FileNotFoundError:
        blog_files = []
    
    # Start XML string
    sitemap_content = '<?xml version="1.0" encoding="UTF-8"?>\n'
    sitemap_content += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
    
    # 1. Add Structural Pages
    for page in core_pages:
        sitemap_content += f'  <url>\n    <loc>{base_url}/{page}</loc>\n    <lastmod>{datetime.now().strftime("%Y-%m-%d")}</lastmod>\n    <priority>0.80</priority>\n  </url>\n'
    
    # 2. Add Dynamic Blog Posts (Crucial for Google to find individual news)
    for blog in blog_files:
        sitemap_content += f'  <url>\n    <loc>{base_url}/post.html?file={blog}</loc>\n    <lastmod>{datetime.now().strftime("%Y-%m-%d")}</lastmod>\n    <priority>0.64</priority>\n  </url>\n'
        
    sitemap_content += '</urlset>'
    
    # Write to the root directory
    with open('sitemap.xml', 'w') as f:
        f.write(sitemap_content)
    print("Sitemap updated successfully!")

if __name__ == "__main__":
    # First, fetch the news and create markdown files
    update_blog()
    
    # Second, scan those files and update the sitemap
    update_sitemap()
