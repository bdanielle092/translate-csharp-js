using System;
using System.Collections.Generic;
using System.Linq;

namespace insulter
{
    class Program
    {
        static void Main(string[] args)
        {
            // this is a list of strings
            List<string> insults = new List<string>
            {
                "You look like what morning breath smells like.",
                "If you tried to give me cpr I would probably throw myself back under water",
                "I am not a fan of you",
                "You think you're so special...and you are. The fact of your existence is nearly impossible to believe",
                "I'd rather walk than be on the same plane as you",
                "If I were given a million dollars to hang out with you...I would, but then I'd have to spend half of it on therapy",
                "Do you have to be so...like that?"
            };
            // count of list items using  .Count method
            int NumberOfInsults = insults.Count();

            // list to hold the random numbers
            List<int> RandomInsultsList = new List<int>();

            // look to ensure we don't end up with duplicate insults
            while (RandomInsultsList.Count < 3)
            {
                int insultRandom = new Random().Next(0, NumberOfInsults);

                if (!RandomInsultsList.Contains(insultRandom))
                {
                    RandomInsultsList.Add(insultRandom);
                }

            }

            // look through the insults
            for (int i = 0; i < 3; i++)
            {
                int index = RandomInsultsList[i];
                Console.WriteLine(insults[index]);
            }
        }
    }
}