function command(comm) {
  var commSplit = comm.split(" ");
  var commargs = ["args"];
  for (i = 1; i < commSplit.length; i++) {
    commargs.push(commSplit[i]);
  }
  var commands = commList();
  if (commands.indexOf(commSplit[0]) != -1) {
    window[commSplit[0]](commargs);
  }
  else {
    writeToShell('command: "' + comm + '" does not exist')
  }
}

function writeToShell(str) {
  if (str.constructor === Array) {
    $("#shell").append('<b class="user">user:</b> ' + str[0] + "<br>");
    console.log("user: " + str[0]);
    for (i = 1; i < str.length; i++) {
      $("#shell").append('<b class="user">&nbsp &nbsp &nbsp &nbsp</b> ' + str[i] + "<br>");
      console.log(str[i]);
    }
  }
  else {
    $("#shell").append('<b class="user">user:</b> ' + str + "<br>");
    console.log("user: " + str);
  }
}

function echo(str) {
  if (str.length == 1) {
    writeToShell('missing argument, run "help" for usage');
  }
  else {
    if (str.constructor === Array) {
      console.log("echo: ");
      $("#shell").append("echo: <br>");
      for (i = 1; i < str.length; i++) {
        $("#shell").append('<b class="user">&nbsp &nbsp &nbsp &nbsp</b> ' + str[i] + " ");
        console.log(str[i]);
      }
      $("#shell").append("<br>");
      console.log("end echo;");
    }
  }
}

function addlib(lib) {
  $.getScript(lib, function() {
    console.log('Loaded script: ' + lib);
  });
}

function info() {
  var infoArray = ["Shell info"];
  infoArray.push("Author | Zac McChesney");
  infoArray.push("Version | v1.0");
  writeToShell(infoArray);
  $("#shell").append('<b class="user">&nbsp &nbsp &nbsp &nbsp</b> ' + 'Website | <a href="http://zacmcchesney.com" target="_blank">zacmcchesney.com<a>' + "<br>");
}

function runjs(js) {
  window[js[1]](js[2]);
}

function commList() {
  var commands = ["help"];
  commands.push("echo");
  commands.push("info");
  commands.push("runjs");
  return commands;
}

function help() {
  var helpArray = ["help command"];
  helpArray.push("help | displays a list of commands with descriptions");
  helpArray.push('echo "echo text" | outputs the "echo text"');
  helpArray.push("info | displays information about the shell");
  helpArray.push('runjs "js command" "js args" | runs a javascript function');
  writeToShell(helpArray);
}
