"use client";

import Greeting from "../containers/greeting/Greeting";
import Skills from "../containers/Skills/Skills";
import StackProgress from "../containers/skillProgress/skillProgress";
import Education from "../containers/education/Education";
import WorkExperience from "../containers/workExperience/WorkExperience";
import Projects from "../containers/projects/Projects";
import StartupProject from "../containers/StartupProjects/StartupProject";
import Achievement from "../containers/achievement/Achievement";
import Blogs from "../containers/Blogs/Blogs";
import Talks from "../containers/talks/Talks";
import Twitter from "../containers/twitter-embed/twitter";
import Podcast from "../containers/podcast/Podcast";
import Profile from "../containers/profile/Profile";
import {blogSection, talkSection, podcastSection, twitterDetails, openSource} from "../portfolio";

export default function Home() {
  return (
    <main>
      <Greeting />
      <Skills />
      <StackProgress />
      <Education />
      <WorkExperience />
      {openSource.display && <Projects />}
      <StartupProject />
      <Achievement />
      {blogSection.display && <Blogs />}
      {talkSection.display && <Talks />}
      {twitterDetails.display && <Twitter />}
      {podcastSection.display && <Podcast />}
      <Profile />
    </main>
  );
}
