
import aws from "../assets/skills/aws.svg";
import azure from "../assets/skills/azure.svg";
import bootstrap from "../assets/skills/bootstrap.svg";
import c from "../assets/skills/c.svg";
import cplusplus from "../assets/skills/cplusplus.svg";
import csharp from "../assets/skills/csharp.svg";
import css from "../assets/skills/css.svg";
import deno from "../assets/skills/deno.svg";
import django from "../assets/skills/django.svg";
import figma from "../assets/skills/figma.svg";
import firebase from "../assets/skills/firebase.svg";
import git from "../assets/skills/git.svg";
import go from "../assets/skills/go.svg";
import graphql from "../assets/skills/graphql.svg";
import html from "../assets/skills/html.svg";
import java from "../assets/skills/java.svg";
import javascript from "../assets/skills/javascript.svg";
import julia from "../assets/skills/julia.svg";
import kotlin from "../assets/skills/kotlin.svg";
import materialui from "../assets/skills/materialui.svg";
import matlab from "../assets/skills/matlab.svg";
import mongoDB from "../assets/skills/mongoDB.svg";
import mysql from "../assets/skills/mysql.svg";
import nextJS from "../assets/skills/nextJS.svg";
import nginx from "../assets/skills/nginx.svg";
import php from "../assets/skills/php.svg";
import postgresql from "../assets/skills/postgresql.svg";
import python from "../assets/skills/python.svg";
import react from "../assets/skills/react.svg";
import ruby from "../assets/skills/ruby.svg";
import tailwind from "../assets/skills/tailwind.svg";
import vitejs from "../assets/skills/vitejs.svg";
import vue from "../assets/skills/vue.svg";
import vuetifyjs from "../assets/skills/vuetifyjs.svg";
import wordpress from "../assets/skills/wordpress.svg";

export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case "html":
      return html;
    case "css":
      return css;
    case "javascript":
      return javascript;
    case "next js":
      return nextJS;
    case "react":
      return react;
    case "vue":
      return vue;
    case "bootstrap":
      return bootstrap;
    case "mongodb":
      return mongoDB;
    case "mysql":
      return mysql;
    case "postgresql":
      return postgresql;
    case "tailwind":
      return tailwind;
    case "vitejs":
      return vitejs;
    case "vuetifyjs":
      return vuetifyjs;
    case "c":
      return c;
    case "c++":
      return cplusplus;
    case "c#":
      return csharp;
    case "go":
      return go;
    case "java":
      return java;
    case "kotlin":
      return kotlin;
    case "julia":
      return julia;
    case "matlab":
      return matlab;
    case "php":
      return php;
    case "python":
      return python;
    case "ruby":
      return ruby;
    case "aws":
      return aws;
    case "deno":
      return deno;
    case "django":
      return django;
    case "firebase":
      return firebase;
    case "git":
      return git;
    case "graphql":
      return graphql;
    case "materialui":
      return materialui;
    case "nginx":
      return nginx;
    case "wordpress":
      return wordpress;
    case "azure":
      return azure;
    case "figma":
      return figma;
    default:
      break;
  }
};
