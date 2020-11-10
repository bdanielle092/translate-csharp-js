using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace fizzbuzz
{
    class Program
    {
        static void Main(string[] args)
        {
            // for loop
            for (int i = 1; i <= 100; i++)
            {
                //if else statements 
                if (i % 15 == 0)
                {
                    Console.WriteLine("fizzbuzz");
                }
                else if (i % 3 == 0)
                {
                    Console.WriteLine("fizz");
                }
                else if (i % 5 == 0)
                {
                    Console.WriteLine("buzz");
                }
                else
                {
                    Console.WriteLine(i);
                }
            }
        }
    }
}