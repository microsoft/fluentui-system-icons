# Visual Icon Description Generator

This directory contains scripts to generate visual descriptions of the PNG icons in the `png_icons/` directory. There are two approaches available:

## Option 1: AI-Powered Visual Descriptions (Recommended)

The `generate_visual_descriptions.py` script uses OpenAI's GPT-4 with vision capabilities to analyze each PNG icon and generate accurate visual descriptions of what the icon actually looks like.

### Prerequisites
```bash
pip install openai pillow requests
```

### Setup
You'll need an OpenAI API key. Either:
1. Set environment variable: `export OPENAI_API_KEY="your-api-key-here"`
2. Or pass it as an argument: `--api-key your-api-key-here`

### Usage
```bash
# Process all icons (will take time and cost money)
python generate_visual_descriptions.py

# Process first 10 icons for testing
python generate_visual_descriptions.py --limit 10

# Resume from a specific index (useful if interrupted)
python generate_visual_descriptions.py --start-from 100

# Specify custom output file
python generate_visual_descriptions.py --output my_descriptions.jsonl
```

### Example Output
```json
{"image": "png_icons/airplane_take_off_24_regular.png", "visual_description": "An airplane silhouette tilted diagonally upward to the right, with a small circular wheel under the fuselage and a thin horizontal line below."}
{"image": "png_icons/access_time_24_filled.png", "visual_description": "A solid black circle with two clock hands pointing to different positions, representing a clock face."}
```

## Option 2: Simple Filename-Based Descriptions

The `generate_simple_descriptions.py` script generates descriptions based on filename analysis and doesn't require external APIs.

### Prerequisites
```bash
pip install pillow
```

### Usage
```bash
# Process all icons
python generate_simple_descriptions.py

# Process first 100 icons
python generate_simple_descriptions.py --limit 100

# Custom output file
python generate_simple_descriptions.py --output simple_descriptions.jsonl
```

### Example Output
```json
{"image": "png_icons/airplane_take_off_24_regular.png", "simple_description": "airplane icon with take off action, in outline style, at 24px size"}
{"image": "png_icons/access_time_24_filled.png", "simple_description": "clock or time icon, in filled style, at 24px size"}
```

## Comparison

| Feature | AI-Powered | Simple |
|---------|------------|--------|
| Accuracy | High - sees actual visual content | Medium - based on filename |
| Cost | Requires OpenAI API (costs money) | Free |
| Speed | Slower (API calls) | Fast |
| Internet Required | Yes | No |
| Description Quality | Detailed visual descriptions | Basic keyword-based |

## Processing Large Datasets

For the full dataset of 5,157 icons:

### AI-Powered Approach
- **Cost Estimate**: ~$25-50 (depends on OpenAI pricing)
- **Time**: ~2-4 hours
- **Resumable**: Yes, use `--start-from` if interrupted

### Simple Approach  
- **Cost**: Free
- **Time**: ~5-10 minutes
- **Resumable**: Yes, use `--start-from` if interrupted

## Tips

1. **Start Small**: Test with `--limit 10` first to verify everything works
2. **Resume on Interruption**: Both scripts support `--start-from` to resume processing
3. **Monitor Progress**: Scripts show progress every 10 (AI) or 100 (simple) icons
4. **Backup Results**: The JSONL files are written incrementally, so partial results are saved

## Output Format

Both scripts generate JSONL files where each line contains:
- `image`: Path to the PNG file (relative to project root)
- `visual_description` (AI) or `simple_description` (Simple): The generated description

You can combine or compare the outputs as needed for your use case.
