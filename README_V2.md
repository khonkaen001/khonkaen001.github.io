# Github Action

1. สร้างโฟลเดอร์ `.github`
2. สร้างโฟลเดอร์ใน `.github` ชื่อ ` workflows`
3. สร้างไฟล์ `actions.yml`
4. ตัวอย่าง Source Code

```yml
name: GitHub Actions Demo #? ชื่อโครงการใหญ่
on: [push] #? event ที่ทำงานใน git
#กรณีทำใน branh ให้เพิ่ม branches: [ชื่อbranches] ถ้าเป็น gitlab จะมีข้อเสียคือทำงานในไฟล์เดียว ถ้า github สามารถแยกไฟล์ได้
jobs:
  job: #! ชื่อ job
    runs-on: ubuntu-latest #! จำลอง os ที่ใช้งาน ตัวอย่าง เช่น
    steps: # การทำงานภายใน job
      - run: echo "🎉 Hello Ksukong" #? เป็นคำสั่งที่อยู่ใน os บรรทัดที่ 5
      - uses: snow-actions/line-notify@v1.0.0 #? lib ของไลน์
        with: # ? ตัวแปรที่ต้องส่ง หรือ props ถ้า เป็น lib อื่น ก็ใช้ อันอื่น
          access_token: FKdAHdNfGVWd4HKO7jikqc7tdgrAUDOH1f1024RaFkD
          message: เสียปลั๊กไฟ

  #! กรณีที่ทำงานแบบมีเงื่อนไข จำเป็นต้องมี needs และชื่อ  job ก่อนหน้าเสมอ
  job2: #! ชื่อ job
    runs-on: ubuntu-latest #! os ที่ใช้งาน
    needs: job
    steps:
      - run: echo "🎉 Hello Ksukong" #? เป็นคำสั่งที่อยู่ใน os บรรทัดที่ 5
      - uses: snow-actions/line-notify@v1.0.0 #? lib ของไลน์
        with: # ? ตัวแปรที่ต้องส่ง
          access_token: FKdAHdNfGVWd4HKO7jikqc7tdgrAUDOH1f1024RaFkD
          message: เลือกเบอร์ของพัดลม
#! ข้อควรระวังการเว้นวรรค
```

# DataBase With Docker !!

## สิ่งที่ต้องมี

1. ไฟล์ `docker-compose.yml`
2. extension ของ vscode ชื่อ `MySQL` มี check ถูกสีฟ้า
3. run docker-compose ด้วยคำสั่ง

```bash
 docker-compose up
```

...

## คำสั่ง Mysql พื้นฐาน

1. การดึงข้อมูลมาแสดง

```sql
SELECT xxx,xxx2 FROM products
```

คำสั่ง "ชื่อตาราง".\* จะใช้ในกรณีที่ มีหลายตารางมาเชื่อมกับ products จะทำให้มีข้อมูลเยอะแต่เราจะเอาเฉพาะข้อมูลในตาราง product

```sql
SELECT products.* FROM products
```

2. การเปลี่ยนชื่อ Colume จะใช้ AS \*\*

```sql
SELECT product.*, product.price * 0.07 AS vat FROM product
```

3. กรณีที่มีหลายเงื่อนไข สามารถใช้ AND มาคั่นได้

```sql
SELECT id , name, price FROM product WHERE price > 120 AND name LIKE "%ข้าวโพด%";

```

4. กรณีที่เรียงดึงข้อมูลตัวเลขให้มาแสดง โดยแสดงจากน้อยไปมากให้ใช้ ASC (Default) เรียงจากน้อยไปมาก

```sql
SELECT id , name, price FROM product ORDER BY price;
```

กรณีเรียงจากมากไปน้อยให้ใช้ DESC

```sql
SELECT id , name, price FROM product ORDER BY price DESC;
```

5. ถ้าต้องการดึงข้อมูลออกมาแล้วไม่อยากให้ข้อมูลซ้ำกัน เราสามารถใส่ keyword “DISTINCT” นำหน้า column name ที่ต้องการเอาข้อมูลที่ซ้ำออก

```sql
SELECT DISTINCT name FROM product ORDER BY name;
```

6. กำหนดจำนวนการดึงข้อมูล โดย ใช้ LIMIT

```sql
SELECT * FROM product LIMIT 3;
```