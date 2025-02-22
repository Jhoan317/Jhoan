import turtle
import time

# Configuración de la pantalla
ventana = turtle.Screen()
ventana.title("Corazón Animado")
ventana.bgcolor("white")

# Configuración de la tortuga
tortuga = turtle.Turtle()
tortuga.color("red")
tortuga.pensize(3)
tortuga.speed(1)

# Función para dibujar un corazón
def dibujar_corazon():
    tortuga.begin_fill()
    tortuga.left(50)
    tortuga.forward(133)
    tortuga.circle(50, 200)
    tortuga.right(140)
    tortuga.circle(50, 200)
    tortuga.forward(133)
    tortuga.end_fill()

# Función para animar el corazón
def animar_corazon():
    for i in range(10):
        tortuga.clear()
        dibujar_corazon()
        tortuga.penup()
        tortuga.goto(0, i * 10)
        tortuga.pendown()
        time.sleep(0.1)

# Ejecutar la animación
animar_corazon()

# Esconder la tortuga y mantener la ventana abierta
tortuga.hideturtle()
ventana.mainloop()
