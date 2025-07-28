# 📄 Automated Resume Pipeline

This repository automatically compiles and deploys my resume whenever changes are made.

## 🔄 How it works

1. **Edit** `resume.tex` in this repository
2. **Push** changes to main/master branch  
3. **GitHub Actions** automatically:
   - Compiles LaTeX to PDF
   - Creates a new release with the PDF
   - Updates the website at https://nakshhkohli.com

## 🚀 Features

- ✅ **Automatic PDF compilation** from LaTeX source
- ✅ **Version tracking** with timestamped releases  
- ✅ **Website integration** - auto-updates resume link
- ✅ **Manual triggers** available if needed
- ✅ **Pull request testing** without publishing

## 📋 Workflow Status

[![Build and Release Resume](https://github.com/Nakshh/resume/actions/workflows/build-resume.yml/badge.svg)](https://github.com/Nakshh/resume/actions/workflows/build-resume.yml)

[![Update Website Resume](https://github.com/Nakshh/resume/actions/workflows/update-website.yml/badge.svg)](https://github.com/Nakshh/resume/actions/workflows/update-website.yml)

## 🔗 Links

- **Latest Resume PDF:** [Download from Releases](https://github.com/Nakshh/resume/releases/latest)
- **Live Website:** https://nakshhkohli.com
- **Website Repository:** https://github.com/Nakshh/website

## ⚡ Quick Edit

Want to make a quick change? Edit [`resume.tex`](./resume.tex) directly on GitHub and the pipeline will handle the rest!

---

*Last updated automatically by GitHub Actions* 🤖
