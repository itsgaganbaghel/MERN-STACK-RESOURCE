const url = "https://api.github.com/users/";
const get = (element) => document.getElementById(`${element}`);
const getter = (elem) => document.getElementById(`${elem}`)
const input = get("Input");
const searchBtn = get("searchBtn");

function updateProfile(data) {
  const userImage = get("photo");
  const name = get("name");
  const username = get("Username");
  const date = get("joiningDetails");
  const repos = get("repoCount");
  const followers = get("FollowersCount");
  const following = get("FollowingCount");
  const profileBio = get("description");
  const location = get("address");
  const website = get("Portfolio");
  const twitter = get("twitter");
  const company = get("Profession");
  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let dateSegment;

  userImage.src = `${data.avatar_url}`;
  name.innerText = data?.name;
  username.innerText = `@${data?.login}`;
  username.href = data?.html_url;
  dateSegment = data?.created_at.split("T").shift().split("-");
  date.innerText = `Joined ${dateSegment[2]} ${month[dateSegment[1] - 1]} ${dateSegment[0]}`;

  profileBio.innerText =data?.bio === null ? "This Profile has no Bio" : data?.bio;

  repos.innerText = data?.public_repos;
  repos.href = data?.repos_url;
  followers.innerText = data?.followers;
  followers.href = data?.following_url;
  following.innerText = data?.following;
  following.href = data?.following_url;

  location.innerText =data?.location == null ? " Not Available" : data?.location;
  website.innerText = "Portfolio";
  website.href = data?.blog;
  twitter.innerText = data?.twitter;
  twitter.href =data?.twitter_username == null? "they don't have twitter account": data?.twitter_username;
  company.innerText =data?.company == null ? "Company Data is Null " : data?.company;
  company.href = data?.company; 
}

async function getUserData(url) {
  try {
    const response = await fetch(url + input.value);
    const data = await response.json();
    updateProfile(data);
    // throw new Error('error')
  } catch (e) {
    console.log(e.name);
    console.log(e.message);
  }
}

searchBtn.addEventListener("click", () => {
  // console.log("Searching...");
  // console.log(input.value);
  // console.log(url + input.value);
  getUserData(url);
  if (input.value == "" ) {
    getUserData("https://api.github.com/users/itsgaganbaghel");
  }
});

getUserData("https://api.github.com/users/itsgaganbaghel");
