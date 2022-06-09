using System;
using System.Collections.Generic;

namespace API.DTOs
{
    public class MemberDto
    {
        //NU TREBUIE SA AVEM TOATE PROPRIETATILE DIN AppUser, ci doar ce vrem sa se vada cand fac select(ProjectTo)
        public int Id { get; set; }
        public string Username { get; set; }
        public string PhotoUrl { get; set; }
        //deoarece metoda era GetAge atunci executa metoda si returneaza valoarea in variabila Age
        public int Age { get; set; }
        public string KnownAs { get; set; }
        public DateTime Created { get; set; }
        public DateTime LastActive { get; set; }
        public string Gender { get; set; }
        public string Introduction { get; set; }
        public string LookingFor { get; set; }
        public string Interests { get; set; }
        public string City { get; set; }
        public string Country { get; set; }
        public ICollection<PhotoDto> Photos { get; set; }

    }
}