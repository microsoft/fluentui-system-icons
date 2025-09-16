#!/usr/bin/env python3
"""
Script to generate visual descriptions of PNG icons using AI vision.
Creates a JSONL file with visual descriptions of what each icon actually looks like.
"""

import os
import json
import base64
from pathlib import Path
import argparse
from typing import List, Dict, Optional
import time

# You'll need to install these packages:
# pip install openai pillow requests

try:
    import openai
    from PIL import Image
    import requests
except ImportError as e:
    print(f"Missing required package: {e}")
    print("Please install required packages:")
    print("pip install openai pillow requests")
    exit(1)

class IconDescriber:
    def __init__(self, api_key: Optional[str] = None, model: str = "gpt-4o"):
        """
        Initialize the icon describer.
        
        Args:
            api_key: OpenAI API key (if None, will look for OPENAI_API_KEY env var)
            model: OpenAI model to use for vision analysis
        """
        self.client = openai.OpenAI(api_key=api_key)
        self.model = model
        
    def encode_image(self, image_path: str) -> str:
        """Encode image to base64 string."""
        with open(image_path, "rb") as image_file:
            return base64.b64encode(image_file.read()).decode('utf-8')
    
    def describe_icon(self, image_path: str, max_retries: int = 3) -> Optional[str]:
        """
        Generate a visual description of an icon.
        
        Args:
            image_path: Path to the PNG icon
            max_retries: Number of times to retry on failure
            
        Returns:
            Visual description string or None if failed
        """
        try:
            # Encode the image
            base64_image = self.encode_image(image_path)
            
            # Create the prompt
            prompt = """Describe this icon in a clear, concise way focusing on what you visually see. 
            
            Guidelines:
            - Describe the shapes, lines, and visual elements you see
            - Mention orientation, position, and relationships between elements
            - Keep it under 25 words
            - Focus on visual appearance, not assumed meaning
            - Use simple, descriptive language
            
            Example format: "A circular clock face with two hands pointing to different positions, surrounded by a thin border"
            
            Describe this icon:"""
            
            for attempt in range(max_retries):
                try:
                    response = self.client.chat.completions.create(
                        model=self.model,
                        messages=[
                            {
                                "role": "user",
                                "content": [
                                    {"type": "text", "text": prompt},
                                    {
                                        "type": "image_url",
                                        "image_url": {
                                            "url": f"data:image/png;base64,{base64_image}"
                                        }
                                    }
                                ]
                            }
                        ],
                        max_tokens=100,
                        temperature=0.3
                    )
                    
                    description = response.choices[0].message.content.strip()
                    return description
                    
                except Exception as e:
                    print(f"Attempt {attempt + 1} failed for {image_path}: {e}")
                    if attempt < max_retries - 1:
                        time.sleep(2 ** attempt)  # Exponential backoff
                    else:
                        return None
                        
        except Exception as e:
            print(f"Error processing {image_path}: {e}")
            return None
    
    def process_icons(self, 
                     png_dir: str, 
                     output_file: str, 
                     limit: Optional[int] = None,
                     start_from: int = 0,
                     progress_interval: int = 10) -> None:
        """
        Process all PNG icons and generate descriptions.
        
        Args:
            png_dir: Directory containing PNG icons
            output_file: Output JSONL file path
            limit: Maximum number of icons to process (None for all)
            start_from: Index to start processing from (for resuming)
            progress_interval: How often to print progress
        """
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
        failed = 0
        
        # Determine write mode based on start_from
        mode = 'a' if start_from > 0 else 'w'
        
        with open(output_file, mode, encoding='utf-8') as f:
            for i, png_file in enumerate(png_files):
                current_index = start_from + i
                
                # Generate description
                description = self.describe_icon(str(png_file))
                
                if description:
                    # Create JSONL entry
                    entry = {
                        "image": f"png_icons/{png_file.name}",
                        "visual_description": description
                    }
                    
                    # Write to file
                    f.write(json.dumps(entry) + '\n')
                    f.flush()  # Ensure data is written immediately
                    
                    processed += 1
                else:
                    failed += 1
                    print(f"Failed to describe: {png_file.name}")
                
                # Progress reporting
                if (i + 1) % progress_interval == 0:
                    print(f"Processed {i + 1}/{len(png_files)} icons (Total index: {current_index + 1}/{total_files})")
                    print(f"  Success: {processed}, Failed: {failed}")
        
        print(f"\nCompleted! Processed: {processed}, Failed: {failed}")
        print(f"Results written to: {output_file}")

def main():
    parser = argparse.ArgumentParser(description="Generate visual descriptions for PNG icons")
    parser.add_argument("--png-dir", default="png_icons", help="Directory containing PNG icons")
    parser.add_argument("--output", default="icon_visual_descriptions.jsonl", help="Output JSONL file")
    parser.add_argument("--limit", type=int, help="Limit number of icons to process")
    parser.add_argument("--start-from", type=int, default=0, help="Start processing from this index")
    parser.add_argument("--api-key", help="OpenAI API key (or set OPENAI_API_KEY env var)")
    parser.add_argument("--model", default="gpt-4o", help="OpenAI model to use")
    parser.add_argument("--progress-interval", type=int, default=10, help="Progress reporting interval")
    
    args = parser.parse_args()
    
    # Check for API key
    api_key = args.api_key or os.getenv('OPENAI_API_KEY')
    if not api_key:
        print("Error: OpenAI API key required!")
        print("Either set OPENAI_API_KEY environment variable or use --api-key argument")
        return 1
    
    # Check if PNG directory exists
    if not os.path.exists(args.png_dir):
        print(f"Error: PNG directory '{args.png_dir}' not found!")
        return 1
    
    # Initialize describer
    describer = IconDescriber(api_key=api_key, model=args.model)
    
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
