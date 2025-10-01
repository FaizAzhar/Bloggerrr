fun1 <- function(x,sumx=0){
  if (x==1) {return (sumx + 1)}
  sumx = sumx + (1.0/x)
  return (fun1(x-1,sumx=sumx))
}

fun2 <- function(X){
  return (fun1(X)/X)
}

fun1 <- function(n){5^(1/n) - 1}
fun2 <- function(n){
  return ((1/5)^(1/n) - 1)
}

fun1 <- function(x){
  return ((1+1/x)^x)
}

fun2 <- function(X){(X+1)/(factorial(X)^(1/X))}

x = seq(1,1000, length.out=100)
y = lapply(x,fun1)
z = lapply(x,fun2)

plot(x,y)
plot(x,z,col="red")
