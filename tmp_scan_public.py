from pathlib import Path
import re
root = Path('app') / '(public)'
valid_prefix = re.compile(r'^(import |export |const |let |var |async |function |class |"use client"|\'use client\'|//|#!|$)')
problems = []
for path in sorted(root.rglob('*')):
    if path.suffix.lower() in {'.js', '.jsx', '.ts', '.tsx'}:
        try:
            text = path.read_text(encoding='utf-8', errors='replace')
        except Exception as e:
            problems.append(f'ERROR READ: {path} -> {e}')
            continue
        lines = [line for line in text.splitlines() if line.strip()]
        first = lines[0] if lines else ''
        if not valid_prefix.match(first):
            problems.append(f'BAD START: {path} -> {first!r}')
        if re.search(r'C:\\Users|C:/Users|<!DOCTYPE|<html|<\?xml|^[A-Z]:\\', text, re.MULTILINE):
            problems.append(f'SUSPICIOUS CONTENT: {path}')
if problems:
    print('\n'.join(problems))
else:
    print('OK')
