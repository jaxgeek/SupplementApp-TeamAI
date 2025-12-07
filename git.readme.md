# init repo, set name/email (only if not set globally)
git config --global user.name "Barry"
git config --global user.email "bear_b23@hotmail.com"

cd "C:\Users\bear_\Desktop\Development\Projects\SupplementApp-TeamAI"
git init
git add .
git commit -m "Initial commit"
# create remote repo and push (requires gh)
gh repo create SupplementApp-TeamAI --public --source=. --remote=origin --push
# OR if you created the repo on github.com manually, add remote:
# git remote add origin https://github.com/<your-org-or-user>/SupplementApp-TeamAI.git
# git branch -M main
# git push -u origin main