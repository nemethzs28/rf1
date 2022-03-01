# Tesztjegyzőkönyv - Alapműveletek

Az alábbi tesztdokumentum a WebPincér projekthez tartozó Alapműveletek funkcióihoz készült. Felelőse: Mindenki 


## 1. Teszteljárások (TP)

### 1.1. Felhasználó bejelentkezés funkció tesztelése
- Azonosító: TP-01
- Tesztesetek: TC-01, TC-02
- Leírás: Felhasználó bejelentkezés funkció tesztelése
    0. lépés: Nyissuk meg az alkalmazást, és navigáljunk a bejelentkezés fülhöz
    1. lépés: Írjuk be az e-mail mezőbe a megfelelő `E-MAIL` címet
    2. lépés: Írjuk be a jelszó mezőbe a megfelelő `JELSZÓ` jelszót
    3. lépés: Nyomjuk meg a "Bejelentkezés" gombot
    4. lépés: Ellenőrizzük az eredményt. Elvárt eredmény: `Sikeres-e` bejelentkezés!

### 1.2. Felhasználó regisztráció funkció tesztelése
- Azonosító: TP-02
- Tesztesetek: TC-01, TC-02
- Leírás: Felhasználó regisztráció funkció tesztelése
    0. lépés: Nyissuk meg az alkalmazást, és navigáljunk a regisztráció fülhöz
    1. lépés: Írjuk be a vezetéknév mezőbe a megfelelő `VEZETÉKNÉV` nevet
    2. lépés: Írjuk be a keresztnév mezőbe a megfelelő `KERESZTNÉV` nevet
    3. lépés: Írjuk be az e-mail mezőbe a megfelelő `E-MAIL` címet
    4. lépés: Írjuk be a jelszó mezőbe a megfelelő `JELSZÓ` jelszót
    5. lépés: Írjuk be a jelszó újra mezőbe a megfelelő `JELSZÓÚJRA` jelszót
    6. lépés: Írjuk be a telefonszám mezőbe a megfelelő `TELEFONSZÁM` számot
    6. lépés: Írjuk be a irányítószám mezőbe a megfelelő `IRÁNYÍTÓSZÁM` számot
    6. lépés: Írjuk be a város mezőbe a megfelelő `VÁROS` nevét
    6. lépés: Írjuk be a utca, házszám mezőbe a megfelelő `UTCA, HÁZSZÁM` számot
    6. lépés: Írjuk be a emelet, ajtó mezőbe a megfelelő `EMELET, AJTÓ` számot
    7. lépés: Pipáljuk be az "Elfogadom az általános szerződési feltételeket" checkboxot
    8. lépés: Nyomjuk meg a "Bejelentkezés" gombot
    9. lépés: Ellenőrizzük az eredményt. Elvárt eredmény: `Sikeres-e` regisztráció!

### 1.3 Felhasználó listázása funkció tesztelése
- Azonosító: TP-03
- Tesztesetek: TC-01
- Leírás: Felhasználók listázása funkció tesztelése
  0. lépés: Nyissuk meg az alkalmazást, és lépjünk be adminként
  1. lépés: Navigáljunk a megfelelő oldalra, ahol automatikusan ki lesznek listázva a felhasználók
  2. lépés: Ellenőrizzük az eredményt. Elvárt eredmény: `Sikeres-e` listázás!

### 1.4 Felhasználó módosítása funkció tesztelése
- Azonosító: TP-04
- Tesztesetek: TC-01
- Leírás: Felhasználó módosítása funkció tesztelése
  0. lépés: Nyissuk meg az alkalmazást, és lépjünk be adminként
  1. lépés: Navigáljunk a megfelelő oldalra, ahol automatikusan ki lesznek listázva a felhasználók
  2. lépés: Válasszunk egy tetszlőges felhasználót
  3. lépés: Nyomjuk meg az `Módosítás` gombot, ami lehetővé teszi, hogy módosítanni lehessen az adatokat
  4. lépés: Módosítsuk a telefonszámát, vagyis a telefonszám mezőben állítstuk át `TELEFONSZÁM` számra
  5. lépés: Nyomjuk meg a `Submit` gombot
  6. lépés: Ellenőrizzük az eredményt. Elvárt eredmény: `TELEFONSZÁM`!

### 1.5 Felhasználó törlése funkció tesztelése
- Azonosító: TP-05
- Tesztesetek: TC-01
- Leírás: Felhasználó törlése funkció tesztelése
  0. lépés: Nyissuk meg az alkalmazást, és lépjünk be adminként
  1. lépés: Navigáljunk a megfelelő oldalra, ahol automatikusan ki lesznek listázva a felhasználók
  2. lépés: Válasszuk ki egy tetszlőges felhasználót
  3. lépés: Nyomjuk meg a `Törlés` gombot
  4. lépés: Ellenőrizzük az eredményt. Elvárt eredmény: `Sikeres-e` törlés!

### 1.6. Étterem bevitele funkció tesztelése
- Azonosító: TP-06
- Tesztesetek: TC-01, TP-02
- Leírás: Étterem bevitele funkció tesztelése
  0. lépés: Nyissuk meg az alkalmazást, és lépjünk be adminként és navigáljuk a megfelelő helyre
  1. lépés: Írjuk be az étterem név mezőbe a megfelelő `ÉTTEREMNÉV` nevet
  2. lépés: Írjuk be az árkategória mezőbe a megfelelő `ÁRKATEGÓRIA` értéket
  3. lépés: Írjuk be a leírás mezőbe a megfelelő `LEÍRÁS` szövegét 
  4. lépés: Írjuk be az értékelés mezőbe a megfelelő `ÉRTÉKELÉS` mértékét
  5. lépés: Adjunk meg egy képet a `KÉP` mezőbe
  6. lépés: Nyomjuk meg a `Étterem létrehozása` gombot
  7. lépés: Ellenőrizzük az eredményt. Elvárt eredmény: `Sikeres-e` Bevitel!

### 1.7. Éttermek listázása funkció tesztelése
- Azonosító: TP-07
- Tesztesetek: TC-01
- Leírás: Éttermek listázása funkció tesztelése
  0. lépés: Nyissuk meg az alkalmazást
  1. lépés: Navigáljunk a főoldalra
  2. lépés: A mezőbe írt szöveg alapján kilistázza a szűrt étteremeket, üresen hagyva az összeset.
  3. lépés: Ellenőrizzük az eredményt. Elvárt eredmény: `Sikeres-e` listázás!

### 1.8. Étterem módosítása funkció tesztelése
- Azonosító: TP-08
- Tesztesetek: TC-01
- Leírás: Éttermek módosítása funkció tesztelése
  0. lépés: Nyissuk meg az alkalmazást, és lépjünk be adminként
  1. lépés: Navigáljunk a megfelelő oldalra, ahol automatikusan ki lesznek listázva az éttermek
  2. lépés: Válasszunk egy tetszlőges az éttermet
  3. lépés: Nyomjuk meg az "Módosítás" gombot, ami lehetővé teszi, hogy módosítanni lehessen az adatokat
  4. lépés: Módosítsuk a értékelést, vagyis az értékelés mezőben állítstuk át `ÉRTÉKELÉS` számra
  5. lépés: Nyomjuk meg a `Submit` gombot
  6. lépés: Ellenőrizzük az eredményt. Elvárt eredmény: `ÉRTÉKELÉS`

### 1.9. Étterem törlése funkció tesztelése
- Azonosító: TP-09
- Tesztesetek: TC-01
- Leírás: Éttermek törlése funkció tesztelése
  0. lépés: Nyissuk meg az alkalmazást, és lépjünk be adminként
  1. lépés: Navigáljunk a megfelelő oldalra, ahol automatikusan ki lesznek listázva az éttermek
  2. lépés: Válasszuk ki egy tetszlőges felhasználót
  3. lépés: Nyomjuk meg a `Törlés` gombot
  4. lépés: Ellenőrizzük az eredményt. Elvárt eredmény: `Sikeres-e` törlés!

### 1.10. Étel bevitele funkció tesztelése
- Azonosító: TP-10
- Tesztesetek: TC-01, TP-02
- Leírás: Étel bevitele funkció tesztelése
  0. lépés: Nyissuk meg az alkalmazást, és lépjünk be adminként és navigáljuk a megfelelő helyre
  1. lépés: Írjuk be az étel név mezőbe, a megfelelő `ÉTELNÉV` nevet
  2. lépés: Írjuk be a leírás mezőbe, a megfelelő `LEÍRÁS` szövegét
  3. lépés: Írjuk be az ár mezőbe, a megfelelő `ÁR` értéket
  4. lépés: Írjuk be az kategória mezőbe, a megfelelő `KETEGÓRIA` fajtáját
  5. lépés: Írjuk be az allergének mezőbe a megfelelő `ALLERGÉN` értékeit
  6. lépés: Adjunk meg egy képet, a `KÉP` mezőbe
  7. lépés: Nyomjuk meg a `Étel létrehozása` gombot
  8. lépés: Ellenőrizzük az eredményt. Elvárt eredmény: `Sikeres-e` Bevitel!

### 1.11. Ételek listázása funkció tesztelése
- Azonosító: TP-11
- Tesztesetek: TC-01
- Leírás: Ételek listázása funkció tesztelése
  0. lépés: Nyissuk meg az alkalmazást
  1. lépés: Navigáljunk a főoldalra, ahol automatikusan ki lesznek listázva az éttermek, ha rákeresünk
  2. lépéa: Válasszunk egy tetszőleges éttermet, ahol aztán ki lesznek listázva kategóriánként az ételek
  3. lépés: Ellenőrizzük az eredményt. Elvárt eredmény: `Sikeres-e` listázás!

### 1.12. Étel módosítása funkció tesztelése
- Azonosító: TP-12
- Tesztesetek: TC-01
- Leírás: Ételek módosítása funkció tesztelése
  0. lépés: Nyissuk meg az alkalmazást, és lépjünk be adminként
  1. lépés: Navigáljunk a megfelelő oldalra, ahol automatikusan ki lesznek listázva az ételek
  2. lépés: Válasszunk egy tetszlőges ételt
  3. lépés: Nyomjuk meg az `Módosítás` gombot, ami lehetővé teszi, hogy módosítanni lehessen az adatokat
  4. lépés: Módosítsuk az árát, vagyis az ár mezőben állítstuk át `ÁR` számra
  5. lépés: Nyomjuk meg a `Submit` gombot
  6. lépés: Ellenőrizzük az eredményt. Elvárt eredmény: `Sikeres-e` módosítás!

### 1.13. Étel törlése funkció tesztelése
- Azonosító: TP-13
- Tesztesetek: TC-01
- Leírás: Ételek törlése funkció tesztelése
  0. lépés: Nyissuk meg az alkalmazást, és lépjünk be adminként
  1. lépés: Navigáljunk a megfelelő oldalra, ahol automatikusan ki lesznek listázva az ételek
  2. lépés: Válasszuk ki egy tetszlőges ételt
  3. lépés: Nyomjuk meg a `Törlés` gombot
  4. lépés: Ellenőrizzük az eredményt. Elvárt eredmény: `Sikeres-e` törlés!

### 1.14. Kosárba helyezés funkció tesztelése
- Azonosító: TP-14
- Tesztesetek: TC-01
- Leírás: Kosárba helyezés funkció tesztelése
  0. lépés: Nyissuk meg az alkalmazást
  1. lépés: Navigáljunk a megfelelő oldalra, ahol automatikusan ki lesznek listázva az ételek
  2. lépés: Válasszuk ki egy tetszlőges ételt
  3. lépés: Nyomjuk meg a `Kosárba` gombot
  4. lépés: Ellenőrizzük az eredményt. Elvárt eredmény: `Sikeres-e` kosárba helyezés!

### 1.15. Fizetés funkció tesztelése
- Azonosító: TP-15
- Tesztesetek: TC-01
- Leírás: Fizetés funkció tesztelése
  0. lépés: Nyissuk meg az alkalmazást
  1. lépés: Navigáljunk a megfelelő oldalra, ahol automatikusan ki lesznek listázva az ételek
  2. lépés: Válasszuk ki egy tetszlőges ételt és tegyük a kosárba, a `Kosárba` gombbal
  3. lépés: Navigáljunk a kosár oldalra, ahol ellenőrízni kell a listát, amit rendelni szeretnénk
  4. lépés: Nyomjuk meg a `Megrendelés` gombot
  5. lépés: Ki kell tölteni a szállítási adatokat és személyes információkat
  6. lépés: Nyomjunk a `Fizetés és Megrendelés` gombra
  7. lépés: Ellenőrizzük az eredményt. Elvárt eredmény: `Sikeres-e` rendelés!


## 2. Teszesetek (TC)

### 2.1. Felhasználó bejelentkezés funkció tesztesetei

#### 2.1.1. TC-01
- TP: TP-01
- Leírás: Sikeres Bejelentkezés funkció tesztelése
- Bemenet: `E-mail` = santapeter00@gmail.com; `JELSZÓ` = jelszó
- Művelet: nyomjuk meg a `Bejelentkezés` gombot
- Elvárt kimenet: `Sikeres-e` = Sikeres Bejelentkezés!

#### 2.1.2. TC-02
- TP: TP-01
- Leírás: Sikertelen bejelentkezés funkció tesztelése
- Bemenet: `E-mail` = randomMailAmiNeLegyenADBben@gmail.com; `JELSZÓ` = random
- Művelet: nyomjuk meg a `Bejelentkezés` gombot
- Elvárt kimenet: `Sikeres-e` = Sikertelen Bejelentkezés! (Nincs ilyen felhasználó)

### 2.2. Felhasználó regisztráció funkció tesztesetei

#### 2.2.1. TC-01
- TP: TP-02
- Leírás: Sikeres regisztráció funkció tesztelése
- Bemenet: `VEZETÉKNÉV` = Mindegy; `KERESZTNÉV` = TénylegMindegy;
  `E-mail` = amiMegNemLetezik00@gmail.com; `JELSZÓ` = jelszó; `JELSZÓÚJRA` = jelszó;
  `TELEFONSZÁM` = 06101234567; `IRÁNYÍTÓSZÁM` = 6725; `VÁROS` = Szeged;
  `UTCA, HÁZSZÁM` = Tisza Lajos krt. 10.; `EMELET, AJTÓ` = 2/1
- Művelet: nyomjuk meg a `Regisztráció` gombot
- Elvárt kimenet: `Sikeres-e` = Sikeres Bejelentkezés!

#### 2.2.2. TC-02
- TP: TP-02
- Leírás: Sikertelen regisztráció funkció tesztelése
- Bemenet: `VEZETÉKNÉV` = Mindegy; `KERESZTNÉV` = TénylegMindegy;
  `E-mail` = santapeter00@gmail.com; `JELSZÓ` = jelszó; `JELSZÓÚJRA` = jelszó;
  `TELEFONSZÁM` = 06101234567; `IRÁNYÍTÓSZÁM` = 6725; `VÁROS` = Szeged;
  `UTCA, HÁZSZÁM` = Tisza Lajos krt. 10.; `EMELET, AJTÓ` = 2/1
- Művelet: nyomjuk meg a `Regisztráció` gombot
- Elvárt kimenet: `Sikeres-e` = Sikertelen Bejelentkezés! (e-mail cím már létezik)

### 2.3. Felhasználó listázása funkció tesztesetei

#### 2.3.1. TC-01
- TP: TP-03
- Leírás: Felhasználó listázása funkció tesztelése
- Művelet: Navigáljunk az admin profillal Felhasználók listázása oldalra
- Elvárt kimenet: `Sikeres-e` = Sikeres listázás!

### 2.4. Felhasználó módosítása funkció tesztesetei

#### 2.4.1. TC-01
- TP: TP-04
- Leírás: Felhasználó módosítása funkció tesztelése
- Művelet: Navigáljunk az admin profillal Felhasználók listázása oldalra
- Bemenet: Válasszunk egy tetszőleges user-t és változtassuk meg a telefonszámát:
`TELEFONSZÁM` = 06101234567;
- Elvárt kimenet: `TELEFONSZÁM` = 06101234567

### 2.5. Felhasználó törlése funkció tesztesetei

#### 2.5.1. TC-01
- TP: TP-05
- Leírás: Felhasználó törlése funkció tesztelése
- Művelet: Navigáljunk az admin profillal Felhasználók listázása oldalra
- Művelet: Válasszunk egy tetszőleges user-t és töröljük ki:
- Elvárt kimenet: `Sikeres-e` = Sikeres törlés!

### 2.6. Étterem bevitele funkció tesztesetei

#### 2.6.1. TC-01
- TP: TP-06
- Leírás: Sikeres Étterem bevitele funkció tesztelése
- Művelet: Navigáljunk az admin profillal Étterem listázása oldalra
- Művelet: Nyomjuk meg a hozzáad gombot, ami elnavigál a megfelelő formra
- Bemenet: `ÉTTEREMNÉV` = Mindegy; `ÁRKATEGÓRIA` = olcsó;
  `LEÍRÁS` = mindenMiJó; `ÉRTÉKELÉS` = 5; `KÉP` = img/valami.png;
- Művelet: Nyomjuk meg az `Étterem létrehozás` gombot
- Elvárt kimenet: `Sikeres-e` = Sikeres bevitel!

#### 2.6.2. TC-02
- TP: TP-06
- Leírás: Sikertelen Étterem bevitele funkció tesztelése
- Művelet: Navigáljunk az admin profillal Étterem listázása oldalra
- Művelet: Nyomjuk meg a hozzáad gombot, ami elnavigál a megfelelő formra
- Bemenet: `ÉTTEREMNÉV` = KFC; `ÁRKATEGÓRIA` = olcsó;
  `LEÍRÁS` = mindenMiJó; `ÉRTÉKELÉS` = 5; `KÉP` = img/valami.png;
- Művelet: Nyomjuk meg az `Étterem létrehozás` gombot
- Elvárt kimenet: `Sikeres-e` = Sikertelen bevitel! (KFC Étterem már létezik)

### 2.7. Étterem listázása funkció tesztesetei

#### 2.7.1. TC-01
- TP: TP-07
- Leírás: Étterem listázása funkció tesztelése
- Művelet: Navigáljunk az admin profillal az Étterem listázása oldalra
- Elvárt kimenet: `Sikeres-e` = Sikeres listázás!

### 2.8. Étterem módosítása funkció tesztesetei

#### 2.8.1. TC-01
- TP: TP-08
- Leírás: Étterem módosítása funkció tesztelése
- Művelet: Navigáljunk az admin profillal az Étterem listázása oldalra
- Bemenet: Válasszunk egy tetszőleges Éttermet és változtassuk meg az értékelését:
  `ÉRTÉKELÉS` = 1;
- Elvárt kimenet: `ÉRTÉKELÉS` = 1

### 2.9. Étterem törlése funkció tesztesetei

#### 2.9.1. TC-01
- TP: TP-09
- Leírás: Étterem törlése funkció tesztelése
- Művelet: Navigáljunk az admin profillal Étterem listázása oldalra
- Művelet: Válasszunk egy tetszőleges Éttermet és töröljük ki:
- Elvárt kimenet: `Sikeres-e` = Sikeres törlés!

### 2.10. Étel bevitele funkció tesztesetei

#### 2.10.1. TC-01
- TP: TP-10
- Leírás: Sikeres Étel bevitele funkció tesztelése
- Művelet: Navigáljunk az admin profillal Étterem listázása oldalra, aztán válasszunk egy éttermet
- Művelet: Nyomjuk meg a hozzáad gombot, ami elnavigál a megfelelő formra
- Bemenet: `ÉTELNÉV` = Mindegy; `LEÍRÁS` = Nagyon finom;
  `ÁR` = 1000; `KATEGÓRIA` = tálak; `ALLERGÉNEK` = semmi; `KÉP` = img/valami.png;
- Művelet: Nyomjuk meg az `Étel létrehozás` gombot
- Elvárt kimenet: `Sikeres-e` = Sikeres bevitel!

### 2.11. Étel listázása funkció tesztesetei

#### 2.11.1. TC-01
- TP: TP-11
- Leírás: Étel listázása funkció tesztelése
- Művelet: Navigáljunk az admin profillal Étel listázása oldalra
- Elvárt kimenet: `Sikeres-e` = Sikeres listázás!

### 2.12. Étel módosítása funkció tesztesetei

#### 2.12.1. TC-01
- TP: TP-12
- Leírás: Étel módosítása funkció tesztelése
- Művelet: Navigáljunk az admin profillal az Étel listázása oldalra
- Bemenet: Válasszunk egy tetszőleges Ételt és változtassuk meg az árát:
  `ÁR` = 100;
- Elvárt kimenet: `ÁR` = 100

### 2.13. Étel törlése funkció tesztesetei

#### 2.13.1. TC-01
- TP: TP-13
- Leírás: Étel törlése funkció tesztelése
- Művelet: Navigáljunk az admin profillal az Étel listázása oldalra
- Művelet: Válasszunk egy tetszőleges Ételt és töröljük ki:
- Elvárt kimenet: `Sikeres-e` = Sikeres törlés!

### 2.14. Kosárba helyezés funkció tesztesetei

#### 2.14.1. TC-01
- TP: TP-14
- Leírás: Kosárba helyezés funkció tesztelése
- Művelet: Navigáljunk egy tetszőleges ételhez
- Művelet: Nyomjuk meg a `Kosárba` gombot
- Elvárt kimenet: `Sikeres-e` = Sikeres kosárba helyezés!

### 2.15. Fizetés funkció funkció tesztesetei

#### 2.15.1. TC-01
- TP: TP-15
- Leírás: Fizetés funkció funkció tesztelése
- Művelet: Navigáljunk egy tetszőleges ételhez
- Művelet: Nyomjuk meg a `Kosárba` gombot
- Művelet: Navigáljunk a Kosár oldalra
- Művelet: Nyomjuk meg a `Megrendelés` gombra, és várjuk a megerősítő emailt
- Elvárt kimenet: `Sikeres-e` = Sikeres rendelés!


## 3.Tesztriportok (TR)


### 3.1. Felhasználó bejelentkezés funkció tesztesetei

#### 3.1.1. TC-01
- TP: TP-01
  1. lépés: 'santapeter00@gmail.com'-ot írtam a mail inputba
  2. lépés: 'jelszó'-t írtam a jelszó inputba
  3. lépés: 'Bejelentkezés' gombra kattintottam
  4. lépés: helyes eljárás, sikeres belépés!

#### 3.1.2. TC-02
- TP: TP-01
  1. lépés: 'randomMailAmiNeLegyenADBben@gmail.com'-ot írtam a mail inputba
  2. lépés: 'random'-ot írtam a jelszó inputba
  3. lépés: 'Bejelentkezés' gombra kattintottam
  4. lépés: helyes eljárás, sikertelen belépés!

### 3.2. Felhasználó regisztráció funkció tesztriportjai

#### 3.2.1. TC-01
- TP: TP-02
  1. lépés: 'Mindegy'-et írtam a vezetéknév inputba
  2. lépés: 'TénylegMindegy'-et írtam a keresztnév inputba
  3. lépés: 'amiMegNemLetezik00@gmail.com'-ot írtam a mail inputba
  4. lépés: 'jelszó'-t írtam a jelszó inputba
  5. lépés: 'jelszó'-t írtam a jelszóújra inputba
  6. lépés: '06101234567' számot írtam a telefonszám inputba
  7. lépés: '6725' számot írtam az irányítószám inputba
  8. lépés: 'Szeged'-et írtam a város inputba
  9. lépés: 'Tisza Lajos krt. 10.'-et írtam a utca, házszám inputba
  10. lépés: '2/1'-et írtam a emelet, ajtó inputba
  11. lépés: bepipáltam az 'Elfogadom az általános szerződési feltételeket' checkboxot
  12. lépés: 'Bejelentkezés' gombra kattintottam
  13. lépés: helyes eljárás, sikeres regisztráció!

#### 3.2.2. TC-02
- TP: TP-02
  1. lépés: 'Mindegy'-et írtam a vezetéknév inputba
  2. lépés: 'TénylegMindegy'-et írtam a keresztnév inputba
  3. lépés: 'santapeter00@gmail.com'-ot írtam a mail inputba
  4. lépés: 'jelszó'-t írtam a jelszó inputba
  5. lépés: 'jelszó'-t írtam a jelszóújra inputba
  6. lépés: '06101234567' számot írtam a telefonszám inputba
  7. lépés: '6725' számot írtam az irányítószám inputba
  8. lépés: 'Szeged'-et írtam a város inputba
  9. lépés: 'Tisza Lajos krt. 10.'-et írtam a utca, házszám inputba
  10. lépés: '2/1'-et írtam a emelet, ajtó inputba
  11. lépés: bepipáltam az 'Elfogadom az általános szerződési feltételeket' checkboxot
  12. lépés: 'Bejelentkezés' gombra kattintottam
  13. lépés: helyes eljárás, sikertelen regisztráció!


### 3.3. Felhasználó listázása funkció tesztriportjai

#### 3.3.1. TC-01
- TP: TP-03
  1. lépés: admin profillal főoldalra lépés
  2. lépés: AdminFelhasználóKezelő gombra kattintás
  3. lépés: Sikeres listázás!


### 3.4. Felhasználó módosítása funkció tesztriportjai

#### 3.4.1. TC-01
- TP: TP-04
  1. lépés: admin profillal főoldalra lépés
  2. lépés: AdminFelhasználóKezelő gombra kattintás
  3. lépés: tetszőlegs felhasználó telefonszám módosítása
  4. lépés: '06101234567'-ra módosítottam
  5. lépés: sikeres módosítás


### 3.5. Felhasználó törlése funkció tesztriportjai

#### 3.5.1. TC-01
- TP: TP-05
  1. lépés: admin profillal főoldalra lépés
  2. lépés: AdminFelhasználóKezelő gombra kattintás
  3. lépés: felhasználó törlése
  4. lépés: sikeres törlés

### 3.6. Étterem bevitele funkció tesztriportjai

#### 3.6.1. TC-01
- TP: TP-06
  1. lépés: admin profillal főoldalra lépés
  2. lépés: AdminÉtteremKezelő gombra kattintás
  3. lépés: kilistázódnak a meglévő éttermek, hozzáadás gombra kattintás
  4. lépés: 'Mindegy'-et írtam az étterem nevéhez
  5. lépés: 'olcsó'-t írtam az árkategóriához
  6. lépés: 'mindenMiJó'-t írtam a leíráshoz
  7. lépés: '5'-t adtam meg az értékeléshez
  8. lépés: 'img/valami.png'-t írtam a kép path-hoz
  9. lépés: 'Étterem Létrehozása' gombra kattintás
  10. lépés: sikeres étterem létrehozás

#### 3.6.2. TC-02
- TP: TP-06
  1. lépés: admin profillal főoldalra lépés
  2. lépés: AdminÉtteremKezelő gombra kattintás
  3. lépés: kilistázódnak a meglévő éttermek, hozzáadás gombra kattintás
  4. lépés: 'KFC'-et írtam az étterem nevéhez
  5. lépés: 'olcsó'-t írtam az árkategóriához
  6. lépés: 'mindenMiJó'-t írtam a leíráshoz
  7. lépés: '5'-t adtam meg az értékeléshez
  8. lépés: 'img/valami.png'-t írtam a kép path-hoz
  9. lépés: 'Étterem Létrehozása' gombra kattintás
  10. lépés: sikertelen étterem létrehozás

### 3.7. Étterem listázása funkció tesztriportjai

#### 3.7.1. TC-01
- TP: TP-07
  1. lépés: admin profillal főoldalra lépés
  2. lépés: AdminÉtteremKezelő gombra kattintás
  3. lépés: Sikeres listázás!

### 3.8. Étterem módosítása funkció tesztriportjai

#### 3.8.1. TC-01
- TP: TP-08
  1. lépés: admin profillal főoldalra lépés
  2. lépés: AdminÉtteremKezelő gombra kattintás
  3. lépés: tetszőlegs étterem értékelés módosítása
  4. lépés: '1'-re módosítottam
  5. lépés: sikeres módosítás

### 3.9. Étterem törlése funkció tesztriportjai

#### 3.9.1. TC-01
- TP: TP-09
  1. lépés: admin profillal főoldalra lépés
  2. lépés: AdminÉtteremKezelő gombra kattintás
  3. lépés: étterem törlése
  4. lépés: sikeres törlés

### 3.10. Étel bevitele funkció tesztriportjai

#### 3.10.1. TC-01
- TP: TP-10
  1. lépés: admin profillal főoldalra lépés
  2. lépés: AdminÉtteremKezelő gombra kattintás
  3. lépés: tetszőleges éttermet kiválasztunk, utána 'étlap' gombra kattintunk
  4. lépés: 'Hozzáadás' gombra kattintunk
  5. lépés: 'Mindegy'-et írtam a étel nevéhez
  6. lépés: 'Nagyon finom'-at a leíráshoz
  7. lépés: '1000'-et az árhoz
  8. lépés: 'tálak' a kategóriához
  9. lépés: 'semmi'-t az allergénekhez
  10. lépés: 'img/valami.png'-t a kép path-hoz
  11. lépés: 'Étel Létrehozása' gombra kattintunk
  12. lépés: Sikeres étel létrehozás


### 3.11. Étel listázása funkció tesztriportjai

#### 3.11.1. TC-01
- TP: TP-11
  1. lépés: admin profillal főoldalra lépés
  2. lépés: AdminÉtteremKezelő gombra kattintás
  3. lépés: tetszőleges éttermet kiválasztunk, utána 'étlap' gombra kattintunk
  4. sikeres listázás

### 3.12. Étel módosítása funkció tesztriportjai

#### 3.12.1. TC-01
- TP: TP-12
  1. lépés: admin profillal főoldalra lépés
  2. lépés: AdminÉtteremKezelő gombra kattintás
  3. lépés: tetszőleges éttermet kiválasztunk, utána 'étlap' gombra kattintunk
  4. lépés: tetszőleges étel kiválasztunk és az árát akarjunk megváltozatni
  5. lépés: '100'-ra módosítottam az árát
  6. lépés: sikeres módosítás

### 3.13. Étel törlése funkció tesztriportjai

#### 3.13.1. TC-01
- TP: TP-13
  1. lépés: admin profillal főoldalra lépés
  2. lépés: AdminÉtteremKezelő gombra kattintás
  3. lépés: tetszőleges éttermet kiválasztunk, utána 'étlap' gombra kattintunk
  4. lépés: teszőleges étel törlése
  5. lépés: sikeres törlés

### 3.14. Kosárba helyezés funkció tesztriportjai

#### 3.14.1. TC-01
- TP: TP-14
  1. lépés: felhasználóként egy tetszőleges étterem ételéhez navigálunk és kosárba helyezzük
  2. lépés: 'Kosárba' gombot megnyomjuk, kapunk egy értesítést
  3. lépés: sikeres kosárba helyezés

### 3.15. Fizetés funkció funkció tesztriportjai

#### 3.15.1. TC-01
- TP: TP-15
  1. lépés: meglévő ételek a kosárban vannak
  2. lépés: 'Megrendelés' gombot megnyomtam
  3. lépés: Sikeres rendelés, e-mail értesítő elküldve