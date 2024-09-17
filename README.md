# Football Eye Q Frontend
A frontend for the website used to pick out and save certain exercises.

## Setup
You will need to have Node Version Manager (nvm). The version of node this project uses is stored in `.nvmrc`, and you can run `nvm use` to install it.

Swap to the `dev` branch: `git checkout dev`. If you want to push something into `main`, make a PR in Bitbucket and let someone else check it first, I'd like to keep `main` as always working. If you're working on something big, might be good to branch off `dev` as well, and make a PR to merge back in, just to keep things tidy.

Once you're in the correct branch, make sure you run `npm install`.

Finally, to run the project, run `npm run dev`.

## TODO
- Login page
- Full list of exercises page
- Integrate with backend
- Manage selection of exercises (Instead of checkbox, have each exercise as its own large button)
- Make it look nice :)
    - Make sidebar with Selection, My Selected Exercises, and Logout
    - Make header with Football Eye Q logo
    - Sort out the colours, overlay an image in the background so its not just a solid grey mess back there
    - Steal the favicon image from football-eyeq.com and use it for our own