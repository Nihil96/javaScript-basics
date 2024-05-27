## Домашна 7

### Задача 1.

Во продолжение е даден следниот HTML документ:

```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Event Prevention Exercise</title>
  <style>
    #red-box {
      width: 400px;
      height: 400px;
      background-color: red;
      position: relative;
    }

    #green-box {
      width: 300px;
      height: 300px;
      background-color: green;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    #blue-box {
      width: 200px;
      height: 200px;
      background-color: blue;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  </style>
</head>
<body>
  <div id="red-box">
    <div id="green-box">
      <div id="blue-box"></div>
    </div>
  </div>
  <script></script>
</body>
</html>
```

Ваша задача ќе биде да поставите event listeners на трите квадрати такашто кога ќе се кликне на некој од нив, пребарувачот да покаже порака пр. “You clicked on the red box”.

**Важно:** На клик, треба да се тригерира само една порака.

### Задача 2.

Да се симулира форма за регистрација на корисници. Формата треба да ги содржи следниве инпут полиња:

- First name
- Last name
- Email
- Password
- Confirm password

и секако на крај да има Register копче кое што при клик доколку корисникот ги пополнил сите полиња и доколку password и confirm passwоrd полињата имаат иста вредност, во пребарувачот со помош на alert методот да се испише пораката: “Registration Successful!” заедно со името презимето и самиот e-mail. Доколку вредностите на овие две полиња не се совпаѓаат, да се испише пораката: “Passwords do not match. Please try again.” JavaScript кодот треба да биде напишан во посебен фајл.
Дополнително: Формата да се стилизира минимално со CSS чиј што код треба да биде дефиниран во посебен фајл.

### Задача 3.

Во продолжение е даден следниот html документ кој што во пребарувачот прикажува семафор:

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" />
    <title>Traffic Light</title>
    <style>
      body {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        margin: 0;
      }

      .traffic-light {
        display: flex;
        flex-direction: column;
        padding: 20px;
        border: 3px solid black;
        border-radius: 24px;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
        background: linear-gradient(to bottom, #666, #444);
      }

      .light {
        width: 150px;
        height: 150px;
        border-radius: 50%;
        margin: 10px;
        border: 1px solid #000;
      }
    </style>
  </head>
  <body>
    <div class="traffic-light">
      <div class="light"></div>
      <div class="light"></div>
      <div class="light"></div>
    </div>
  </body>
</html>
```

Ваша задача е да напишете javaScript код кој што ќе го овозможи следново:

- Кога корисникот ќе го притисне копчето „r“, првиот круг треба да стане црвен.
- Ако корисникот го притисне копчето „o“, вториот круг треба да се смени во портокалова боја.
- Ако корисникот го притисне копчето „g“, последниот круг треба да стане зелен.
