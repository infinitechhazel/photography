"use client"
import { useState } from "react"
import Link from "next/link"
import { Calendar, ChevronLeft, ChevronRight } from "lucide-react"

export default function CalendarPage() {
  const [currentDate, setCurrentDate] = useState(new Date(2025, 0, 1))
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [selectedTime, setSelectedTime] = useState<string | null>(null)

  const timeSlots = [
    { time: "09:00 AM", available: true, spots: 1 },
    { time: "10:00 AM", available: true, spots: 1 },
    { time: "11:00 AM", available: true, spots: 1 },
    { time: "12:00 PM", available: false, spots: 1 },
    { time: "01:00 PM", available: true, spots: 1 },
    { time: "02:00 PM", available: true, spots: 1 },
    { time: "03:00 PM", available: true, spots: 1 },
    { time: "04:00 PM", available: true, spots: 1 },
    { time: "05:00 PM", available: false, spots: 1 },
  ]

  // Booked dates (example)
  const bookedDates = [5, 12, 18, 25]

  // Get calendar days
  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
  }

  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay()
  }

  const getDaysArray = () => {
    const daysInMonth = getDaysInMonth(currentDate)
    const firstDay = getFirstDayOfMonth(currentDate)
    const days = []

    for (let i = 0; i < firstDay; i++) {
      days.push(null)
    }

    for (let i = 1; i <= daysInMonth; i++) {
      days.push(i)
    }

    return days
  }

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1))
  }

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1))
  }

  const handleDateSelect = (day: number | null) => {
    if (day && !bookedDates.includes(day)) {
      const newDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day)
      setSelectedDate(newDate)
      setSelectedTime(null)
    }
  }

  const isDateBooked = (day: number | null) => {
    return (day && bookedDates.includes(day) ) || false
  }

  const isDateSelected = (day: number | null) => {
    return selectedDate && day && selectedDate.getDate() === day && selectedDate.getMonth() === currentDate.getMonth()
  }

  const days = getDaysArray()
  const monthName = currentDate.toLocaleDateString("en-US", { month: "long", year: "numeric" })

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section
      <section className="pt-32 pb-16 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 right-1/4 w-96 h-96 bg-gold rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-gold/20 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center space-y-4">
            <p className="text-sm uppercase tracking-widest text-gold font-semibold drop-shadow-lg">Schedule Your Session</p>
            <h1 className="text-4xl md:text-5xl font-bold font-serif text-balance">
              Check <span className="gradient-text">Availability</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Browse our calendar and select your preferred date and time for your photography session.
            </p>
          </div>
        </div>
      </section> */}

      {/* Calendar Section */}
      <section className="py-16 px-6 bg-linear-to-b from-background to-muted/50">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Calendar */}
            <div className="md:col-span-2 space-y-6">
              <div className="p-8 rounded-2xl border border-gold/30 bg-card shadow-xl shadow-gold/10 hover:shadow-gold/20 transition-all duration-300">
                {/* Month Header */}
                <div className="flex items-center justify-between mb-8">
                  <button onClick={handlePrevMonth} className="p-2 hover:bg-gold/10 rounded-lg transition-colors duration-200">
                    <ChevronLeft className="w-6 h-6 text-gold" />
                  </button>
                  <h2 className="text-2xl font-serif font-bold gradient-text">{monthName}</h2>
                  <button onClick={handleNextMonth} className="p-2 hover:bg-gold/10 rounded-lg transition-colors duration-200">
                    <ChevronRight className="w-6 h-6 text-gold" />
                  </button>
                </div>

                {/* Day names */}
                <div className="grid grid-cols-7 gap-2 mb-4">
                  {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                    <div key={day} className="text-center font-semibold text-gold text-sm uppercase tracking-widest">
                      {day}
                    </div>
                  ))}
                </div>

                {/* Calendar days */}
                <div className="grid grid-cols-7 gap-2">
                  {days.map((day, index) => {
                    const isBooked = isDateBooked(day)
                    const isSelected = isDateSelected(day)

                    return (
                      <button
                        key={index}
                        onClick={() => handleDateSelect(day)}
                        disabled={isBooked}
                        className={`aspect-square rounded-lg font-semibold transition-all duration-200 flex items-center justify-center text-sm ${
                          !day
                            ? "invisible"
                            : isBooked
                            ? "bg-muted/50 text-muted-foreground cursor-not-allowed opacity-50"
                            : isSelected
                            ? "bg-linear-to-br from-gold to-gold-dark text-primary shadow-lg shadow-gold/30 scale-110"
                            : "bg-secondary hover:bg-gold/20 hover:border hover:border-gold text-foreground hover:shadow-lg hover:shadow-gold/20 border border-transparent"
                        }`}
                      >
                        {day}
                      </button>
                    )
                  })}
                </div>

                {/* Legend */}
                <div className="mt-8 pt-8 border-t border-gold/20 flex flex-wrap gap-6">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-secondary rounded"></div>
                    <span className="text-sm text-muted-foreground">Available</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-linear-to-br from-gold to-gold-dark rounded shadow-lg shadow-gold/30"></div>
                    <span className="text-sm text-muted-foreground">Selected</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-muted/50 rounded opacity-50"></div>
                    <span className="text-sm text-muted-foreground">Booked</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Time Selection Sidebar */}
            <div className="space-y-6">
              {selectedDate ? (
                <>
                  <div className="p-8 rounded-2xl border border-gold/30 bg-card shadow-xl shadow-gold/10 hover:shadow-gold/20 transition-all duration-300 space-y-6">
                    <div className="space-y-2">
                      <p className="text-sm uppercase tracking-widest text-gold font-semibold">Selected Date</p>
                      <p className="text-2xl font-serif font-bold text-foreground">
                        {selectedDate.toLocaleDateString("en-US", {
                          weekday: "long",
                          month: "long",
                          day: "numeric",
                        })}
                      </p>
                    </div>

                    <div className="border-t border-gold/20 pt-6 space-y-3">
                      <div className="flex items-center justify-between">
                        <p className="text-sm uppercase tracking-widest text-gold font-semibold">Available Times</p>
                        <p className="text-xs bg-gold/10 text-gold px-2 py-1 rounded">{timeSlots.filter((s) => s.available).length} slots</p>
                      </div>
                      <div className="space-y-2">
                        {timeSlots.map((slot) => (
                          <button
                            key={slot.time}
                            onClick={() => slot.available && setSelectedTime(slot.time)}
                            disabled={!slot.available}
                            className={`w-full px-4 py-3 rounded-lg font-semibold transition-all duration-200 border group ${
                              selectedTime === slot.time
                                ? "bg-linear-to-r from-gold to-gold-dark text-primary border-gold shadow-lg shadow-gold/30"
                                : slot.available
                                ? "bg-secondary border-gold/20 text-foreground hover:border-gold hover:bg-gold/10 hover:shadow-lg hover:shadow-gold/20 cursor-pointer"
                                : "bg-muted/40 border-muted/30 text-muted-foreground cursor-not-allowed opacity-60"
                            }`}
                          >
                            <div className="flex items-center justify-between">
                              <span>{slot.time}</span>
                              {slot.available ? (
                                <span className="text-xs opacity-75 group-hover:text-gold transition-colors">
                                  {slot.spots} {slot.spots === 1 ? "spot" : "spots"}
                                </span>
                              ) : (
                                <span className="text-xs opacity-75">Booked</span>
                              )}
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  {selectedTime && (
                    <Link
                      href="/booking"
                      className="block w-full px-6 py-4 gold-glow text-primary font-semibold rounded-lg transition-all duration-200 text-center"
                    >
                      Continue to Booking
                    </Link>
                  )}
                </>
              ) : (
                <div className="p-8 rounded-2xl border border-gold/30 bg-card shadow-xl shadow-gold/10 text-center space-y-4">
                  <Calendar className="w-12 h-12 mx-auto text-gold" />
                  <p className="text-muted-foreground">Select a date from the calendar to see available time slots.</p>
                </div>
              )}

              {/* Info Card */}
              <div className="p-6 rounded-2xl border border-gold/30 bg-linear-to-br from-gold/10 to-primary/10 space-y-3">
                <h3 className="font-serif font-bold text-gold">Session Duration</h3>
                <p className="text-sm text-foreground">All sessions are 2 hours long and include a consultation call before your shoot.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
