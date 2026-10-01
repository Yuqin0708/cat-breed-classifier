import tarfile
import urllib.request
import os

# Create 'data' directory
os.makedirs("data", exist_ok=True)

# 下載檔案
urllib.request.urlretrieve(
    "https://www.robots.ox.ac.uk/~vgg/data/pets/data/images.tar.gz",
    "images.tar.gz"
)
urllib.request.urlretrieve(
    "https://www.robots.ox.ac.uk/~vgg/data/pets/data/annotations.tar.gz",
    "annotations.tar.gz"
)

# Extract images
with tarfile.open("images.tar.gz", "r:gz") as tar:
    tar.extractall(path="data")

# Extract annotations
with tarfile.open("annotations.tar.gz", "r:gz") as tar:
    tar.extractall(path="data")
