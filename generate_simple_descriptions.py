#!/usr/bin/env python3
"""
Simple script to generate basic visual descriptions of PNG icons based on filename analysis
and basic image properties. This doesn't require external APIs.
"""

import os
import json
from pathlib import Path
import argparse
from typing import List, Dict, Optional

try:
    from PIL import Image
except ImportError as e:
    print(f"Missing required package: {e}")
    print("Please install Pillow: pip install pillow")
    exit(1)

class SimpleIconDescriber:
    def __init__(self):
        """Initialize the simple icon describer."""
        # Common icon patterns and their descriptions
        self.pattern_keywords = {
            # Shapes
            'circle': 'circular',
            'square': 'square',
            'triangle': 'triangular',
            'diamond': 'diamond-shaped',
            'oval': 'oval',
            'rectangle': 'rectangular',
            
            # Directions
            'up': 'pointing upward',
            'down': 'pointing downward',
            'left': 'pointing left',
            'right': 'pointing right',
            'diagonal': 'diagonal',
            
            # Actions
            'add': 'plus or addition symbol',
            'remove': 'minus or removal symbol',
            'delete': 'deletion symbol',
            'edit': 'editing symbol',
            'save': 'save symbol',
            'copy': 'copy symbol',
            'cut': 'cut symbol',
            'paste': 'paste symbol',
            
            # Objects
            'folder': 'folder icon',
            'file': 'file icon',
            'document': 'document icon',
            'image': 'image icon',
            'video': 'video icon',
            'audio': 'audio icon',
            'mail': 'envelope or mail icon',
            'phone': 'phone icon',
            'calendar': 'calendar icon',
            'clock': 'clock or time icon',
            'user': 'person or user icon',
            'group': 'group of people icon',
            'home': 'house icon',
            'search': 'magnifying glass icon',
            'settings': 'gear or settings icon',
            'lock': 'lock icon',
            'key': 'key icon',
            'heart': 'heart icon',
            'star': 'star icon',
            'flag': 'flag icon',
            'bookmark': 'bookmark icon',
            'tag': 'tag icon',
            'link': 'link or chain icon',
            'share': 'share icon',
            'download': 'download arrow icon',
            'upload': 'upload arrow icon',
            'cloud': 'cloud icon',
            'wifi': 'wifi signal icon',
            'battery': 'battery icon',
            'volume': 'speaker or volume icon',
            'camera': 'camera icon',
            'microphone': 'microphone icon',
            'location': 'location pin icon',
            'map': 'map icon',
            'car': 'car icon',
            'airplane': 'airplane icon',
            'train': 'train icon',
            'ship': 'ship icon',
            'bicycle': 'bicycle icon',
            'walk': 'walking person icon',
            'run': 'running person icon',
            'shopping': 'shopping cart or bag icon',
            'money': 'money or currency icon',
            'credit': 'credit card icon',
            'bank': 'bank building icon',
            'chart': 'chart or graph icon',
            'graph': 'graph icon',
            'table': 'table or grid icon',
            'list': 'list icon',
            'menu': 'menu or hamburger icon',
            'more': 'more options icon',
            'info': 'information icon',
            'help': 'help or question icon',
            'warning': 'warning or alert icon',
            'error': 'error icon',
            'success': 'success or checkmark icon',
            'close': 'close or X icon',
            'minimize': 'minimize icon',
            'maximize': 'maximize icon',
            'fullscreen': 'fullscreen icon',
            'refresh': 'refresh or reload icon',
            'sync': 'sync icon',
            'undo': 'undo arrow icon',
            'redo': 'redo arrow icon',
            'print': 'printer icon',
            'scan': 'scanner icon',
            'fax': 'fax machine icon',
            'keyboard': 'keyboard icon',
            'mouse': 'computer mouse icon',
            'monitor': 'computer monitor icon',
            'laptop': 'laptop computer icon',
            'tablet': 'tablet device icon',
            'mobile': 'mobile phone icon',
            'gamepad': 'game controller icon',
            'headphones': 'headphones icon',
            'speaker': 'speaker icon',
            'tv': 'television icon',
            'radio': 'radio icon',
            'book': 'book icon',
            'library': 'library icon',
            'school': 'school building icon',
            'graduation': 'graduation cap icon',
            'trophy': 'trophy icon',
            'medal': 'medal icon',
            'gift': 'gift box icon',
            'cake': 'cake icon',
            'food': 'food icon',
            'drink': 'drink icon',
            'coffee': 'coffee cup icon',
            'weather': 'weather icon',
            'sun': 'sun icon',
            'moon': 'moon icon',
            'cloud': 'cloud icon',
            'rain': 'rain icon',
            'snow': 'snow icon',
            'thunder': 'lightning icon',
            'fire': 'fire icon',
            'water': 'water drop icon',
            'leaf': 'leaf icon',
            'tree': 'tree icon',
            'flower': 'flower icon',
            'animal': 'animal icon',
            'cat': 'cat icon',
            'dog': 'dog icon',
            'bird': 'bird icon',
            'fish': 'fish icon',
            'bug': 'bug or insect icon',
            'medical': 'medical cross icon',
            'hospital': 'hospital icon',
            'pill': 'pill or medication icon',
            'bandage': 'bandage icon',
            'thermometer': 'thermometer icon',
            'sport': 'sports icon',
            'ball': 'ball icon',
            'football': 'football icon',
            'basketball': 'basketball icon',
            'soccer': 'soccer ball icon',
            'tennis': 'tennis racket or ball icon',
            'golf': 'golf club or ball icon',
            'swim': 'swimming icon',
            'gym': 'gym or weights icon',
            'target': 'target or bullseye icon',
            'arrow': 'arrow icon',
            'chevron': 'chevron arrow icon',
            'caret': 'caret or triangle arrow icon',
        }
        
        # Style indicators
        self.style_keywords = {
            'filled': 'solid filled',
            'regular': 'outline',
            'light': 'thin outline',
            'bold': 'thick outline',
        }
        
        # Size indicators
        self.size_keywords = {
            '16': '16px',
            '20': '20px',
            '24': '24px',
            '28': '28px',
            '32': '32px',
            '48': '48px',
        }
    
    def analyze_filename(self, filename: str) -> Dict[str, str]:
        """Analyze filename to extract icon information."""
        # Remove extension
        name = Path(filename).stem
        
        # Split by underscores
        parts = name.split('_')
        
        info = {
            'base_name': '',
            'size': '',
            'style': '',
            'modifiers': []
        }
        
        # Extract size (usually a number followed by style)
        for i, part in enumerate(parts):
            if part.isdigit():
                info['size'] = f"{part}px"
                # Next part is usually style
                if i + 1 < len(parts):
                    style_part = parts[i + 1]
                    if style_part in self.style_keywords:
                        info['style'] = self.style_keywords[style_part]
                break
        
        # Build base name (everything before size)
        base_parts = []
        for part in parts:
            if part.isdigit():
                break
            base_parts.append(part)
        
        info['base_name'] = '_'.join(base_parts)
        
        return info
    
    def generate_description(self, filename: str, image_path: str) -> str:
        """Generate a simple description based on filename and basic image analysis."""
        info = self.analyze_filename(filename)
        base_name = info['base_name']
        
        # Try to get basic image properties
        try:
            with Image.open(image_path) as img:
                width, height = img.size
                mode = img.mode
        except Exception:
            width = height = mode = None
        
        # Start building description
        description_parts = []
        
        # Check for keyword matches
        found_keywords = []
        base_lower = base_name.lower()
        
        # Sort keywords by length (longer first) to match more specific terms first
        sorted_keywords = sorted(self.pattern_keywords.items(), key=lambda x: len(x[0]), reverse=True)
        
        for keyword, desc in sorted_keywords:
            if keyword in base_lower:
                found_keywords.append(desc)
                # Remove matched keyword to avoid duplicates
                base_lower = base_lower.replace(keyword, '')
        
        if found_keywords:
            # Use the most relevant keyword description
            if len(found_keywords) == 1:
                main_desc = found_keywords[0]
            else:
                # Combine multiple keywords intelligently
                main_desc = found_keywords[0]
                if len(found_keywords) > 1:
                    additional = [kw for kw in found_keywords[1:] if kw != found_keywords[0]]
                    if additional:
                        main_desc = f"{main_desc} with {' and '.join(additional)}"
            description_parts.append(main_desc)
        else:
            # Fallback to base name processing
            readable_name = base_name.replace('_', ' ').title()
            description_parts.append(f"icon representing {readable_name}")
        
        # Add style information
        if info['style']:
            if info['style'] == 'solid filled':
                description_parts.append("in filled style")
            else:
                description_parts.append(f"in {info['style']} style")
        
        # Add size if available
        if info['size']:
            description_parts.append(f"at {info['size']} size")
        
        return ', '.join(description_parts)
    
    def process_icons(self, 
                     png_dir: str, 
                     output_file: str, 
                     limit: Optional[int] = None,
                     start_from: int = 0,
                     progress_interval: int = 100) -> None:
        """Process all PNG icons and generate simple descriptions."""
        png_dir = Path(png_dir)
        
        # Get all PNG files
        png_files = sorted([f for f in png_dir.glob("*.png")])
        total_files = len(png_files)
        
        print(f"Found {total_files} PNG files")
        
        if limit:
            png_files = png_files[start_from:start_from + limit]
            print(f"Processing {len(png_files)} files (from index {start_from})")
        else:
            png_files = png_files[start_from:]
            print(f"Processing {len(png_files)} files (from index {start_from})")
        
        # Process icons and write to JSONL
        processed = 0
        
        # Determine write mode based on start_from
        mode = 'a' if start_from > 0 else 'w'
        
        with open(output_file, mode, encoding='utf-8') as f:
            for i, png_file in enumerate(png_files):
                current_index = start_from + i
                
                # Generate description
                description = self.generate_description(png_file.name, str(png_file))
                
                # Create JSONL entry
                entry = {
                    "image": f"png_icons/{png_file.name}",
                    "simple_description": description
                }
                
                # Write to file
                f.write(json.dumps(entry) + '\n')
                
                processed += 1
                
                # Progress reporting
                if (i + 1) % progress_interval == 0:
                    print(f"Processed {i + 1}/{len(png_files)} icons (Total index: {current_index + 1}/{total_files})")
        
        print(f"\nCompleted! Processed: {processed}")
        print(f"Results written to: {output_file}")

def main():
    parser = argparse.ArgumentParser(description="Generate simple descriptions for PNG icons")
    parser.add_argument("--png-dir", default="png_icons", help="Directory containing PNG icons")
    parser.add_argument("--output", default="icon_simple_descriptions.jsonl", help="Output JSONL file")
    parser.add_argument("--limit", type=int, help="Limit number of icons to process")
    parser.add_argument("--start-from", type=int, default=0, help="Start processing from this index")
    parser.add_argument("--progress-interval", type=int, default=100, help="Progress reporting interval")
    
    args = parser.parse_args()
    
    # Check if PNG directory exists
    if not os.path.exists(args.png_dir):
        print(f"Error: PNG directory '{args.png_dir}' not found!")
        return 1
    
    # Initialize describer
    describer = SimpleIconDescriber()
    
    # Process icons
    try:
        describer.process_icons(
            png_dir=args.png_dir,
            output_file=args.output,
            limit=args.limit,
            start_from=args.start_from,
            progress_interval=args.progress_interval
        )
        return 0
    except KeyboardInterrupt:
        print("\nInterrupted by user. Progress has been saved.")
        return 1
    except Exception as e:
        print(f"Error: {e}")
        return 1

if __name__ == "__main__":
    exit(main())
