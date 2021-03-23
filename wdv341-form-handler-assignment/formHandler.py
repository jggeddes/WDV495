import cgi

form = cgi.FieldStorage()
tableBody = ""
keys = form.keys()

for key in keys:
    tableBody += "<tr>"
    tableBody += "<td> %s</td>" %(key)
    tableBody += "<td> %s</td>" %(form.getvalue(key))
    tableBody += "</tr>"

first_name = form.getvalue('firstName')
last_name  = form.getvalue('lastName')
school = form.getvalue('school')

print("Content-type:text/html\n\n")
print("<html>")
print("<body>\n","<br />\n")
print("<title>Emerging Tech - Python Form Handler</title>")
print("\n","<br />\n")
print("<h1>Emerging Tech - Python Form Handler</h1>")
print("\n","<br />\n")
print("First Name: %s" % (first_name))
print("\n","<br />\n")
print("Last Name: %s" % (last_name))
print("\n","<br />\n")
print("School: %s" % (school))
print("<br />\n")
print("</body>\n","<br />\n")
print("<br />\n")
print("<table border='a'><tr> <th>Name</th> <th>Value</th> </tr>")
print("%s" % (tableBody))
print("</table>")
print("</html>")