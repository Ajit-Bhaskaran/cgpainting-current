#!/bin/bash

echo "🚀 Pushing CG Painting repository changes to GitHub..."
echo ""

# Check if we're in the right directory
if [ ! -f "amplify.yml" ]; then
    echo "❌ Error: Not in the cgpainting repository directory"
    echo "Please run this script from the cgpainting directory"
    exit 1
fi

# Show current status
echo "📊 Current repository status:"
git status
echo ""

# Show commits to be pushed
echo "📝 Commits ready to push:"
git log --oneline origin/main..HEAD
echo ""

# Attempt to push
echo "🔄 Attempting to push to GitHub..."
git push origin main

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Successfully pushed to GitHub!"
    echo "🌐 Your repository is now updated at: https://github.com/Ajit-Bhaskaran/cgpainting"
    echo ""
    echo "🚀 Next steps for AWS Amplify deployment:"
    echo "1. Go to your AWS Amplify console"
    echo "2. Your app should automatically trigger a new build"
    echo "3. Monitor the build logs for any issues"
    echo "4. Once built, test your website"
else
    echo ""
    echo "❌ Push failed. This is likely due to authentication issues."
    echo ""
    echo "🔧 To fix this, you have a few options:"
    echo ""
    echo "Option 1 - Use GitHub CLI (if available):"
    echo "  gh auth login"
    echo "  git push origin main"
    echo ""
    echo "Option 2 - Use Personal Access Token:"
    echo "  1. Go to GitHub Settings → Developer settings → Personal access tokens"
    echo "  2. Generate a new token with 'repo' scope"
    echo "  3. When prompted for password, use the token instead"
    echo ""
    echo "Option 3 - Configure Git with token:"
    echo "  git remote set-url origin https://YOUR_USERNAME:YOUR_TOKEN@github.com/Ajit-Bhaskaran/cgpainting.git"
    echo "  git push origin main"
fi
