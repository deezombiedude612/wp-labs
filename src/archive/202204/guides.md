---
template: base.html
---

# List of Guides

Looking for some extra information on setting stuff up or for some small pieces of information?
They'll populate here as and when I can put stuff in.

## Preparation Guides

This module requires use of multiple pieces of software.
We'll run through them one at a time.

### Code Editor

For a good first half of the module, you'll require a code editor.
The following link will give a rough idea on how I set my copy of Visual Studio Code up.

- [Visual Studio Code](vscode.md)
- More guides may come as and when I try some others out; if you want me to have a look at any of them, do reach out! I'll see if I can try it out in any spare time I can get.

Alternatively, you can try other code editors like Atom, Sublime Text, Brackets, and Notepad++.
IDEs like Adobe Dreamweaver, Microsoft Expression Web (no longer supported, but functional), WebStorm/PHPStorm by Jetbrains are okay too.

### PHP Programming and MySQL/mariaDB Scripting

Programming in PHP is when setting things up can get tricky - you will now require a LAMP stack to run your PHP web applications.
Luckily, there are software bundles that will get your LAMP stack ready and running.
I recommend XAMPP for most users, though some (especially those using macOS with Apple Silicon) may not be able to install it due to conflicting software requirements.
An alternative is MAMP (I'll try to get a guide of it as soon as I can, watch this space).

- [XAMPP Installation](xampp.md)

As for myself, though.. I won't be using any of these bundles.. you will notice that I have my LAMP stack running without them installed.
Personally, I am a nut for wanting more control over some of the setup.. so I've installed each component required one by one.
I've written up a setup guide detailing steps I've taken to install my own LAMP stack from scratch, but it's only applicable for macOS users.
If you're one of the lucky few who dare try to do what I did myself.. good luck.
I can't guarantee what I've written is up to date, so do carry out your due diligence and consult other sources or tutorials to complement my guide in case something goes awry and my guide doesn't help with fixing it.. or you can try asking me.
I'll see what I can do during then.

- [Setting Up LAMP Stack in macOS (The Hard Way)](lamp_macos.md)

## Miscellaneous and Optional References

### Deprecated Tags and Attributes in HTML

Based on the current HTML5 standard, there may be some tags or attributes that are considered obsolete and should not be used.
For each one, you can replicate their functionalities using CSS (which allows for better synchronization of styles across pages and better control overall).
You can refer to the list of deprecated HTML tags and attributes here.

- [Deprecated Tags and Attributes in HTML](guide-deprecated.md)
