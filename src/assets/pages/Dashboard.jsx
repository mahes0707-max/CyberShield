import React, { useContext } from "react";
import Navbar from "../../components/navbar";
import { CyberContext } from "../../context/CyberContext";

export default function Dashboard() {
  const { stats } = useContext(CyberContext);

  // Password module completed or not
  const passwordCompleted = stats.passwordScore > 0 ? 1 : 0;

  const totalCompleted =
    stats.emailCompleted +
    stats.urlCompleted +
    stats.socialCompleted +
    stats.quizCompleted +
    passwordCompleted;

  const totalCorrect =
    stats.emailCorrect +
    stats.urlCorrect +
    stats.socialCorrect +
    stats.quizCorrect +
    passwordCompleted;

  // Final percentage
  const percentage =
    totalCompleted > 0 ? Math.round((totalCorrect / totalCompleted) * 100) : 0;

  let badge = "";

  if (percentage >= 90) badge = "🏆 Cyber Guardian";
  else if (percentage >= 75) badge = "🥇 Security Expert";
  else if (percentage >= 50) badge = "🥈 Cyber Analyst";
  else badge = "🥉 Beginner Defender";

  let level = "";

  if (percentage >= 90) level = "Level 4 - Security Professional";
  else if (percentage >= 70) level = "Level 3 - Advanced";
  else if (percentage >= 40) level = "Level 2 - Intermediate";
  else level = "Level 1 - Beginner";

  const completedModules =
    (stats.emailCompleted > 0) +
    (stats.socialCompleted > 0) +
    (stats.quizCompleted > 0) +
    (stats.passwordScore > 0) +
    (stats.urlCompleted > 0) +
    (stats.threatsViewed > 0) +
    (stats.humanFirewallCompleted > 0);


  const emailPercentage =
  stats.emailCompleted === 0
    ? 0
    : Math.min(
        100,
        Math.round(
          (stats.emailCorrect /
            stats.emailCompleted) *
            100
        )
      );

const urlPercentage =
  stats.urlCompleted === 0
    ? 0
    : Math.min(
        100,
        Math.round(
          (stats.urlCorrect /
            stats.urlCompleted) *
            100
        )
      );

const socialPercentage =
  stats.socialCompleted === 0
    ? 0
    : Math.min(
        100,
        Math.round(
          (stats.socialCorrect /
            stats.socialCompleted) *
            100
        )
      );

const quizPercentage =
  stats.quizCompleted === 0
    ? 0
    : Math.min(
        100,
        Math.round(
          (stats.quizCorrect /
            stats.quizCompleted) *
            100
        )
      );

const humanFirewallUnlocked =

emailPercentage >=80 &&

urlPercentage>=80 &&

socialPercentage>=80 &&

quizPercentage>=80 &&

stats.passwordCompleted &&

stats.threatCompleted;

  const totalModules = 7;

  const progressPercentage = Math.round(
    (completedModules / totalModules) * 100,
  );

  const certificateUnlocked = completedModules === totalModules;

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-[#000814] p-6">
        <h1 className="text-4xl font-bold  mb-10 text-center text-cyan-400">Cyber Dashboard</h1>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-[#001d3d] p-6 rounded-xl">
            <h2 className="text-sky-500 font-bold">Email Simulator</h2>

            <p className="text-4xl text-white mt-3">
              {stats.emailCorrect}/{stats.emailCompleted}
            </p>
          </div>

          <div className="bg-[#001d3d] p-6 rounded-xl">
            <h2 className="text-sky-500 font-bold">Phishing URL Simulator</h2>

            <p className="text-4xl text-white mt-3">
              {stats.urlCorrect}/{stats.urlCompleted}
            </p>
          </div>

          <div className="bg-[#001d3d] p-6 rounded-xl">
            <h2 className="text-sky-500 font-bold">Social Engineering Quiz</h2>

            <p className="text-4xl text-white mt-3">
              {stats.socialCorrect}/{stats.socialCompleted}
            </p>
          </div>

          <div className="bg-[#001d3d] p-6 rounded-xl">
            <h2 className="text-sky-500 font-bold">🧠 Cyber Quiz</h2>

            <p className="text-4xl text-white mt-4">
              {stats.quizCorrect}/{stats.quizCompleted}
            </p>
          </div>

          <div className="bg-[#001d3d] p-6 rounded-xl">
            <h2 className="text-sky-500 font-bold">📚 Threat Library</h2>

            <p className="text-4xl text-white mt-4">
              {stats.threatsViewed > 0 ? "🏆" : "📖"}
            </p>

            <p className="text-gray-400 mt-2">
              {stats.threatsViewed > 0 ? "Completed" : "Learning"}
            </p>
          </div>
          <div className="bg-[#001d3d] p-6 rounded-xl">
            <h2 className="text-sky-500 font-bold">🔐 Password Security</h2>

            <p className="text-4xl text-white mt-4">
              {stats.passwordScore > 0 ? "🏆" : "📖"}
            </p>

            <p className="text-gray-400 mt-2">
              {stats.passwordScore > 0 ? "Completed" : "Learning"}
            </p>
          </div>
        </div>

              

        {/* XP + Badge + Level */}

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 mt-10">
          {/* XP Card */}
          <div
            className="
              bg-gradient-to-r
              from-purple-900
              to-purple-700
              p-6
              rounded-2xl
              shadow-xl"
          >
            <h2 className="text-purple-200 text-lg">⭐ Experience Points</h2>

            <h1 className="text-5xl text-white mt-4">{stats.xp || 0}</h1>

            <p className="text-gray-300 mt-2">XP Earned</p>
          </div>

          {/* Achievement Badge */}
          <div
            className="
              bg-gradient-to-r
              from-yellow-900
              to-yellow-700
              p-6
              rounded-2xl
              shadow-xl"
          >
            <h2 className="text-yellow-200 text-lg">🏆 Achievement Badge</h2>

            <h1 className="text-5xl mt-5 font-bold text-white ">{badge}</h1>
          </div>

          {/* Current Level */}
          <div
            className="
              bg-gradient-to-r
              from-blue-900
              to-blue-700
              p-6
              rounded-2xl
              shadow-xl"
          >
            <h2 className="text-blue-200 text-lg">🎯 Current Level</h2>

            <h1 className="text-2xl text-white mt-5">{level}</h1>
          </div>
        </div>

        {/* Progress Bar */}

        <div
          className="
                  bg-[#001d3d]
                  p-8
                  rounded-2xl
                  shadow-xl
                  mt-8"
        >
          <div
            className="
                      flex
                      justify-between"
          >
            <h2
              className="
                          text-2xl
                          text-white"
            >
              Overall Progress
            </h2>

            <h1
              className="
                          text-3xl
                          text-cyan-400"
            >
              {progressPercentage}%
            </h1>
          </div>

          <div
            className="
                      w-full
                      h-5
                      bg-slate-700
                      rounded-full
                      mt-6"
          >
            <div
              className="
                              h-full
                              bg-gradient-to-r
                              from-cyan-500
                              to-green-500
                              rounded-full
                              transition-all
                              duration-1000"
              style={{
                width: `${progressPercentage}%`,
              }}
            />
          </div>

          <p
            className="
                      text-gray-300
                      mt-4"
          >
            {completedModules}/{totalModules}
            Modules Completed
          </p>
        </div>

        
            <div className="

bg-[#001d3d]

p-8
text-white
rounded-2xl

shadow-xl

mt-8">

<h2 className="

text-3xl

font-bold

text-cyan-400">

🛡 Human Firewall Status

</h2>

<div className="

space-y-5

mt-8">

<ProgressRow
title="Email Phishing"
percent={emailPercentage}
/>

<ProgressRow
title="URL Detection"
percent={urlPercentage}
/>

<ProgressRow
title="Social Engineering"
percent={socialPercentage}
/>

<ProgressRow
title="Cyber Quiz"
percent={quizPercentage}
/>

<div className="flex justify-between">

<p>Password Checker</p>

<p>

{

stats.passwordCompleted

?

"✅"

:

"❌"

}

</p>

</div>

<div className="flex justify-between">

<p>Threat Library</p>

<p>

{

stats.threatCompleted

?

"✅"

:

"❌"

}

</p>

</div>

<hr className="border-slate-700"/>

<div className="text-center">

{

humanFirewallUnlocked

?

<div>

<h2 className="

text-green-400

text-3xl">

🟢 READY

</h2>

<p className="mt-3">

Human Firewall Simulator
Unlocked

</p>

</div>

:

<div>

<h2 className="

text-red-400

text-3xl">

🔒 LOCKED

</h2>

<p className="mt-3">

Complete every training
with minimum 80%.

</p>

</div>

}

</div>

</div>

</div>
          </div>
          
    </>
  );
}
function ProgressRow({

title,

percent

}){

return(

<div>

<div className="

flex

justify-between

mb-2">

<p>

{title}

</p>

<p>

{percent}%

</p>

</div>

<div className="

w-full

h-3

bg-slate-700

rounded-full">

<div

className={`

h-3

rounded-full

${

percent>=80

?

"bg-green-500"

:

"bg-red-500"

}

`}

style={{

width:`${percent}%`

}}

>

</div>

</div>

</div>

);

}