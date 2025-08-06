import os
import sys

# Define auto-comments based on file names or extensions
def get_comment(filename):
    comments = {
        'main.py': 'FastAPI app with WebSocket routes',
        'index.html': 'Chat UI',
        'styles.css': 'Styling for the interface',
        'script.js': 'WebSocket client logic',
        'requirements.txt': 'Python dependencies',
        'README.md': 'Project documentation',
        '.gitignore': 'Git exclusions',
    }
    ext_comments = {
        '.py': 'Python module',
        '.html': 'HTML file',
        '.css': 'CSS stylesheet',
        '.js': 'JavaScript file',
        '.md': 'Markdown file',
        '.txt': 'Text file',
    }

    if filename in comments:
        return comments[filename]
    ext = os.path.splitext(filename)[1]
    return ext_comments.get(ext, '')

def generate_tree(start_path='.', prefix=''):
    exclude_dirs = {'.git', '__pycache__', '.idea', '.vscode', 'node_modules'}

    for item in sorted(os.listdir(start_path)):
        if item in exclude_dirs:
            continue

        path = os.path.join(start_path, item)
        if os.path.isdir(path):
            print(f"{prefix}├── {item}/")
            generate_tree(path, prefix + "│   ")
        else:
            comment = get_comment(item)
            comment_str = f"  # {comment}" if comment else ""
            print(f"{prefix}├── {item}{comment_str}")

# Run this from your project root
if __name__ == "__main__":
    sys.stdout.reconfigure(encoding='utf-8')  # ✅ Fix for Unicode output on Windows
    print("```plaintext")
    generate_tree('.')
    print("```")