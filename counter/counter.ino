
//int counter = 0;
float tempC;
int pinLM35 = 0;

void setup() {
  Serial.begin(9600);
}

void loop() {
  //Serial.print(++counter, DEC);
  //delay(2000);

  tempC = analogRead(pinLM35);

  tempC = (5.0 * tempC * 100.0)/1024.0;
  Serial.print(tempC);
  Serial.print("\n");
  delay(10000);
}
