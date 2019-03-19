# Blank OctoberCMS Website
This is a new october website theme setup with live reload and a defined folder structure for a quick start. This octoberCMS installation requires **mysql and laravel valet**. Valet must be configured to use the '.devel' domain for laravel mix to work.

### Installation
Follow these steps for installation:

```bash
# Clone this repo into your desired location.
git clone https://github.com/504-digital/blank-october-website.git <projectName>

# Delete the .git folder.
rm -R .git

# Replace blank theme name for actual theme name on main theme folder and replace the **blank theme** reference in the and the following files: **.gitignore, package.json, webpack.mix.js** and this **README.md** with your own.

# Download OctoberCMS in the folder you cloned this repo.
php -r "eval('?>'.file_get_contents('https://octobercms.com/api/installer'));"
php artisan october:fresh

# Create a new database
mysql -u root -p
mysql> CREATE DATABASE <projectName>;

# Install OctoberCMS and follow the steps on your terminal.
php artisan october:install

# Set your new theme active
php artisan theme:use <projectName>

# Install dependencies
npm install

# Run development environment
npm run watch

# *(Optional)* Start a new git repository
git init
```
