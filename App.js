<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>OS Manager - Lesson 1 to 6</title>
<style>
body{font-family:Arial;margin:0;background:#f4f4f4}
nav{background:#222;color:#fff;padding:10px;display:flex;flex-wrap:wrap;gap:8px}
nav button{padding:8px 12px;cursor:pointer;border:none;background:#444;color:#fff;border-radius:5px}
nav button.active{background:#007bff}
.page{display:none;padding:20px;background:#fff;margin:20px;border-radius:10px;box-shadow:0 2px 5px #ccc}
.page.active{display:block}
table{width:100%;border-collapse:collapse;margin-top:10px}
th,td{border:1px solid #ccc;padding:8px;text-align:left}
th{background:#eee}
input,select{padding:6px;margin:3px}
</style>
</head>
<body>
<nav>
<button onclick="showPage('users',this)" class="active">L1 Users</button>
<button onclick="showPage('files',this)">L2 Files</button>
<button onclick="showPage('storage',this)">L3 Storage</button>
<button onclick="showPage('software',this)">L4 Software</button>
<button onclick="showPage('network',this)">L5 Network</button>
<button onclick="showPage('services',this)">L6 Services</button>
</nav>

<div id="users" class="page active">
<h2>L1: User & Group Management</h2>
<input id="uname" placeholder="Username">
<select id="urole"><option>User</option><option>Admin</option><option>Guest</option></select>
<select id="ugroup"><option>Students</option><option>HR</option><option>IT</option></select>
<button onclick="addUser()">Add User</button>
<table id="userTable"><tr><th>Username</th><th>Role</th><th>Group</th><th>Status</th></tr></table>
</div>

<div id="files" class="page">
<h2>L2: File Systems & Permissions</h2>
<input id="fname" placeholder="report.docx">
<select id="fowner"><option>Owner</option><option>Group</option><option>Others</option></select>
<label><input type="checkbox" id="r"> Read</label>
<label><input type="checkbox" id="w"> Write</label>
<label><input type="checkbox" id="x"> Execute</label>
<button onclick="addFile()">Set Permission</button>
<table id="fileTable"><tr><th>File</th><th>Owner</th><th>rwx</th><th>NTFS</th></tr></table>
</div>

<div id="storage" class="page">
<h2>L3: Storage Administration</h2>
<p>HDD: 500GB | SSD: 256GB</p>
<input type="number" id="psize" value="100" placeholder="GB">
<button onclick="addPartition()">Create Partition</button>
<div style="background:#ddd;height:20px;border-radius:10px;margin-top:10px"><div id="used" style="height:20px;background:#28a745;width:40%;border-radius:10px"></div></div>
<p>Utilization: <span id="util">40%</span></p>
<table id="partTable"><tr><th>Volume</th><th>Size</th><th>Status</th></tr></table>
</div>

<div id="software" class="page">
<h2>L4: Software & Package Management</h2>
<input id="sname" placeholder="e.g. Chrome">
<button onclick="installSoftware()">Install</button>
<button onclick="uninstallSoftware()">Uninstall Last</button>
<table id="softTable"><tr><th>Software</th><th>Type</th><th>Version</th></tr></table>
</div>

<div id="network" class="page">
<h2>L5: Network - TCP/IP, DNS, DHCP</h2>
<p>IPv4: <span id="ip">192.168.1.10</span> <button onclick="renewIP()">Renew DHCP</button></p>
<input id="domain" placeholder="google.com"> <button onclick="resolveDNS()">Resolve DNS</button> <span id="dnsResult"></span>
<p><button onclick="pingTest()">Ping Gateway 192.168.1.1</button> <span id="pingResult"></span></p>
</div>

<div id="services" class="page">
<h2>L6: System Services</h2>
<table id="serviceTable">
<tr><th>Service</th><th>Startup</th><th>Status</th><th>Action</th></tr>
<tr><td>DNS Client</td><td>Automatic</td><td>Running</td><td><button onclick="toggle(this)">Stop</button></td></tr>
<tr><td>Print Spooler</td><td>Manual</td><td>Stopped</td><td><button onclick="toggle(this)">Start</button></td></tr>
<tr><td>Web Server (IIS)</td><td>Automatic</td><td>Running</td><td><button onclick="toggle(this)">Stop</button></td></tr>
</table>
</div>

<script>
function showPage(id,btn){
 document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
 document.querySelectorAll('nav button').forEach(b=>b.classList.remove('active'));
 document.getElementById(id).classList.add('active');
 btn.classList.add('active');
}
function addUser(){
 let u=document.getElementById('uname').value;
 if(!u) return alert("Butangi og username");
 document.getElementById('userTable').innerHTML+=`<tr><td>${u}</td><td>${urole.value}</td><td>${ugroup.value}</td><td>Authenticated</td></tr>`;
 uname.value="";
}
function addFile(){
 let perm=(r.checked?'r':'-')+(w.checked?'w':'-')+(x.checked?'x':'-');
 let ntfs=perm=='rwx'?'Full Control':perm.includes('rw')?'Modify':'Read';
 fileTable.innerHTML+=`<tr><td>${fname.value}</td><td>${fowner.value}</td><td>${perm}</td><td>${ntfs}</td></tr>`;
}
let usedP=40;
function addPartition(){
 usedP+=10; if(usedP>95) usedP=95;
 used.style.width=usedP+"%"; util.innerText=usedP+"%";
 partTable.innerHTML+=`<tr><td>Vol ${partTable.rows.length}</td><td>${psize.value}GB</td><td>NTFS Formatted</td></tr>`;
}
function installSoftware(){
 if(!sname.value) return;
 softTable.innerHTML+=`<tr><td>${sname.value}</td><td>Application</td><td>v1.0</td></tr>`;
 sname.value="";
}
function uninstallSoftware(){ if(softTable.rows.length>1) softTable.deleteRow(-1); }
function renewIP(){ ip.innerText="192.168.1."+Math.floor(Math.random()*100); }
function resolveDNS(){ dnsResult.innerText=" -> "+(domain.value||"google.com")+" = 142.250.190.14"; }
function pingTest(){ pingResult.innerText=" Success! Gateway reachable."; }
function toggle(b){ let isStop=b.innerText=="Stop"; b.innerText=isStop?"Start":"Stop"; b.parentElement.previousElementSibling.innerText=isStop?"Stopped":"Running"; }
</script>
</body>
</html>