'use client';

import { useEffect, useState } from 'react';
import { useStore, View } from '@/lib/store';
import { challengeDays, bonusAffirmations } from '@/lib/challenge-data';
import { Sparkles, BookOpen, TrendingUp, Home, Heart, Target, Layers, Gift, Settings, ChevronRight, Check, Plus, X, Calendar, Moon, Sun, Droplet, Zap, Smile, Activity, Utensils, Lightbulb, Image as ImageIcon, Trash2, Download, Bell, BellOff, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function GlowUpChallengeApp() {
  const {
    currentView,
    setCurrentView,
    currentDay,
    setCurrentDay,
    hasStarted,
    startChallenge,
    challengeProgress,
    toggleDayCompletion,
    updateDayNotes,
    journalEntries,
    addJournalEntry,
    updateJournalEntry,
    deleteJournalEntry,
    trackers,
    updateTracker,
    getTrackerByDate,
    routine,
    updateRoutine,
    routineCompletedDates,
    setRoutineCompleted,
    visionBoardImages,
    addVisionBoardImage,
    removeVisionBoardImage,
    theme,
    setTheme,
    notificationsEnabled,
    setNotificationsEnabled,
    getProgressPercentage
  } = useStore();

  const [todayDate] = useState(() => new Date().toISOString().split('T')[0]);
  const [newJournalEntry, setNewJournalEntry] = useState({
    mood: '',
    feelings: '',
    glow: '',
    learned: '',
    freeContent: ''
  });

  useEffect(() => {
    if (hasStarted) {
      setCurrentView('dashboard');
    }
  }, [hasStarted, setCurrentView]);

  const getCurrentDayData = () => challengeDays.find((d) => d.day === currentDay);

  const handleCompleteDay = () => {
    toggleDayCompletion(currentDay);
  };

  const handleSaveJournalEntry = () => {
    if (newJournalEntry.mood || newJournalEntry.feelings) {
      addJournalEntry({
        date: new Date(),
        ...newJournalEntry
      });
      setNewJournalEntry({ mood: '', feelings: '', glow: '', learned: '', freeContent: '' });
    }
  };

  const handleAddVisionImage = (url: string, caption: string) => {
    addVisionBoardImage({ url, caption });
  };

  const getTodayTracker = () => {
    return getTrackerByDate(todayDate) || {
      date: todayDate,
      waterGlasses: 0,
      sleepHours: 0,
      mood: 0,
      activityMinutes: 0,
      skincareCompleted: false,
      habits: {}
    };
  };

  const updateTodayTracker = (updates: Partial<typeof getTodayTracker>) => {
    updateTracker(todayDate, updates);
  };

  const progressPercentage = getProgressPercentage();

  // Onboarding Screen
  if (!hasStarted) {
    return (
      <div className={`min-h-screen flex flex-col ${theme === 'dark' ? 'bg-stone-950 text-stone-100' : 'bg-amber-50 text-stone-900'}`}>
        <div className="flex-1 flex flex-col items-center justify-center p-6 pb-24">
          <div className="max-w-md w-full text-center space-y-8">
            {/* Logo / Title */}
            <div className="space-y-4">
              <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-rose-200 via-pink-200 to-orange-100 dark:from-rose-900 dark:via-pink-900 dark:to-orange-900 shadow-lg">
                <Sparkles className="w-12 h-12 text-rose-500 dark:text-rose-300" />
              </div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-rose-500 via-pink-500 to-orange-400 bg-clip-text text-transparent">
                Glow Up Challenge
              </h1>
              <p className="text-xl text-stone-600 dark:text-stone-400 font-light">
                30 jours pour devenir la meilleure version de toi-même
              </p>
            </div>

            {/* Inspirational Quote */}
            <div className={`p-6 rounded-2xl ${theme === 'dark' ? 'bg-stone-900' : 'bg-white'} shadow-sm border border-stone-200 dark:border-stone-800`}>
              <p className="text-lg italic text-stone-700 dark:text-stone-300 font-serif">
                "Tu ne deviens pas ce que tu veux. Tu deviens ce que tu crois."
              </p>
              <p className="text-sm text-stone-500 dark:text-stone-500 mt-2">— Oprah Winfrey</p>
            </div>

            {/* Features Preview */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: BookOpen, title: '30 Jours', desc: 'Contenu complet' },
                { icon: TrendingUp, title: 'Progression', desc: 'Suivi avance' },
                { icon: Heart, title: 'Journaling', desc: 'Introspection' },
                { icon: Target, title: 'Trackers', desc: 'Habitudes' }
              ].map((feature, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-xl ${theme === 'dark' ? 'bg-stone-900' : 'bg-white'} shadow-sm border border-stone-200 dark:border-stone-800`}
                >
                  <feature.icon className="w-8 h-8 mx-auto mb-2 text-rose-400" />
                  <h3 className="font-semibold text-sm mb-1">{feature.title}</h3>
                  <p className="text-xs text-stone-500 dark:text-stone-500">{feature.desc}</p>
                </div>
              ))}
            </div>

            {/* Start Button */}
            <Button
              onClick={startChallenge}
              className="w-full h-14 text-lg bg-gradient-to-r from-rose-400 via-pink-400 to-orange-300 hover:from-rose-500 hover:via-pink-500 hover:to-orange-400 text-white font-semibold rounded-full shadow-lg shadow-rose-200 dark:shadow-rose-900/30"
            >
              Commencer mon Glow Up
              <Sparkles className="ml-2 w-5 h-5" />
            </Button>

            <p className="text-sm text-stone-500 dark:text-stone-500">
              Rejoins des milliers de femmes dans leur transformation
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen flex flex-col ${theme === 'dark' ? 'bg-stone-950 text-stone-100' : 'bg-amber-50 text-stone-900'}`}>
      {/* Main Content */}
      <main className="flex-1 pb-24 overflow-y-auto">
        {/* Dashboard View */}
        {currentView === 'dashboard' && (
          <div className="p-6 space-y-6 max-w-lg mx-auto">
            {/* Header */}
            <div className="text-center space-y-2">
              <h1 className="text-3xl font-bold bg-gradient-to-r from-rose-500 via-pink-500 to-orange-400 bg-clip-text text-transparent">
                Bienvenue ✨
              </h1>
              <p className={`text-stone-600 dark:text-stone-400 ${theme === 'dark' ? 'text-stone-400' : 'text-stone-600'}`}>
                Continue ton Glow Up Challenge
              </p>
            </div>

            {/* Progress Card */}
            <Card className={`border-none shadow-lg ${theme === 'dark' ? 'bg-stone-900' : 'bg-white'}`}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-rose-400" />
                  Ta Progression
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Semaine {Math.ceil(currentDay / 7)} / 4</span>
                  <span className="text-2xl font-bold text-rose-500">{progressPercentage}%</span>
                </div>
                <Progress value={progressPercentage} className="h-3" />
                <p className="text-xs text-stone-500 dark:text-stone-500 text-center">
                  {challengeProgress.completedDays.length} / 30 jours complétés
                </p>
              </CardContent>
            </Card>

            {/* Today's Challenge */}
            <Card
              className={`border-none shadow-lg cursor-pointer transition-all hover:scale-105 ${theme === 'dark' ? 'bg-gradient-to-br from-rose-900/30 to-pink-900/30' : 'bg-gradient-to-br from-rose-50 to-pink-50'}`}
              onClick={() => {
                setCurrentDay(challengeProgress.currentDay);
                setCurrentView('challenge');
              }}
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <Badge className="bg-rose-500 hover:bg-rose-600">Jour {challengeProgress.currentDay}</Badge>
                  <ChevronRight className="w-5 h-5 text-rose-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{getCurrentDayData()?.title}</h3>
                <p className="text-sm text-stone-600 dark:text-stone-400 line-clamp-2">{getCurrentDayData()?.content}</p>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <div className="grid grid-cols-2 gap-4">
              <Card
                className={`border-none shadow-md cursor-pointer transition-all hover:scale-105 ${theme === 'dark' ? 'bg-stone-900' : 'bg-white'}`}
                onClick={() => setCurrentView('journal')}
              >
                <CardContent className="p-4 text-center">
                  <BookOpen className="w-8 h-8 mx-auto mb-2 text-pink-400" />
                  <h3 className="font-semibold text-sm">Mon Journal</h3>
                  <p className="text-xs text-stone-500 dark:text-stone-500">{journalEntries.length} entrées</p>
                </CardContent>
              </Card>

              <Card
                className={`border-none shadow-md cursor-pointer transition-all hover:scale-105 ${theme === 'dark' ? 'bg-stone-900' : 'bg-white'}`}
                onClick={() => setCurrentView('trackers')}
              >
                <CardContent className="p-4 text-center">
                  <Target className="w-8 h-8 mx-auto mb-2 text-orange-400" />
                  <h3 className="font-semibold text-sm">Trackers</h3>
                  <p className="text-xs text-stone-500 dark:text-stone-500">Aujourd'hui</p>
                </CardContent>
              </Card>

              <Card
                className={`border-none shadow-md cursor-pointer transition-all hover:scale-105 ${theme === 'dark' ? 'bg-stone-900' : 'bg-white'}`}
                onClick={() => setCurrentView('routine')}
              >
                <CardContent className="p-4 text-center">
                  <Layers className="w-8 h-8 mx-auto mb-2 text-rose-400" />
                  <h3 className="font-semibold text-sm">Routine</h3>
                  <p className="text-xs text-stone-500 dark:text-stone-500">5 étapes</p>
                </CardContent>
              </Card>

              <Card
                className={`border-none shadow-md cursor-pointer transition-all hover:scale-105 ${theme === 'dark' ? 'bg-stone-900' : 'bg-white'}`}
                onClick={() => setCurrentView('vision-board')}
              >
                <CardContent className="p-4 text-center">
                  <ImageIcon className="w-8 h-8 mx-auto mb-2 text-pink-400" />
                  <h3 className="font-semibold text-sm">Vision Board</h3>
                  <p className="text-xs text-stone-500 dark:text-stone-500">{visionBoardImages.length} images</p>
                </CardContent>
              </Card>
            </div>

            {/* Bonus Section */}
            <Card
              className={`border-none shadow-lg cursor-pointer transition-all hover:scale-105 ${theme === 'dark' ? 'bg-gradient-to-br from-amber-900/30 to-orange-900/30' : 'bg-gradient-to-br from-amber-50 to-orange-50'}`}
              onClick={() => setCurrentView('bonus')}
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-full bg-gradient-to-br from-amber-200 to-orange-200 dark:from-amber-800 dark:to-orange-800">
                    <Gift className="w-6 h-6 text-amber-600 dark:text-amber-300" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold">Mes Bonus</h3>
                    <p className="text-xs text-stone-500 dark:text-stone-500">Affirmations & Guides</p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-orange-400" />
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Challenge View */}
        {currentView === 'challenge' && (
          <div className="p-6 space-y-6 max-w-lg mx-auto">
            {/* Header */}
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setCurrentView('dashboard')}
              >
                <X className="w-5 h-5" />
              </Button>
              <div className="flex-1">
                <h1 className="text-2xl font-bold">Challenge 30 Jours</h1>
                <p className="text-sm text-stone-500 dark:text-stone-500">Jour {currentDay} / 30</p>
              </div>
            </div>

            {/* Day Selector */}
            <ScrollArea className="h-24 w-full">
              <div className="flex gap-2 pb-4">
                {challengeDays.map((day) => (
                  <Button
                    key={day.day}
                    variant={currentDay === day.day ? 'default' : 'outline'}
                    size="sm"
                    className={`min-w-12 ${currentDay === day.day ? 'bg-rose-500 hover:bg-rose-600' : ''}`}
                    onClick={() => setCurrentDay(day.day)}
                  >
                    {day.day}
                  </Button>
                ))}
              </div>
            </ScrollArea>

            {/* Day Content */}
            {getCurrentDayData() && (
              <Card className={`border-none shadow-lg ${theme === 'dark' ? 'bg-stone-900' : 'bg-white'}`}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <Badge className="bg-gradient-to-r from-rose-400 to-pink-400 mb-2">Semaine {getCurrentDayData()?.week}</Badge>
                      <CardTitle className="text-2xl mb-2">{getCurrentDayData()?.title}</CardTitle>
                      <CardDescription className="text-sm">{getCurrentDayData()?.weekObjective}</CardDescription>
                    </div>
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center ${
                        challengeProgress.completedDays.includes(currentDay)
                          ? 'bg-green-100 dark:bg-green-900'
                          : 'bg-stone-100 dark:bg-stone-800'
                      }`}
                    >
                      {challengeProgress.completedDays.includes(currentDay) ? (
                        <Check className="w-6 h-6 text-green-600 dark:text-green-400" />
                      ) : (
                        <span className="text-2xl">{currentDay}</span>
                      )}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Description */}
                  <div className={`p-4 rounded-xl ${theme === 'dark' ? 'bg-stone-800' : 'bg-stone-50'}`}>
                    <p className="text-lg leading-relaxed">{getCurrentDayData()?.content}</p>
                  </div>

                  {/* Affirmation */}
                  <div className={`p-4 rounded-xl border-l-4 border-rose-400 ${theme === 'dark' ? 'bg-stone-800' : 'bg-rose-50'}`}>
                    <p className="italic text-stone-700 dark:text-stone-300 font-serif">"{getCurrentDayData()?.affirmation}"</p>
                  </div>

                  {/* Actions */}
                  <div className="space-y-4">
                    <h3 className="font-semibold flex items-center gap-2">
                      <Sparkles className="w-5 h-5 text-rose-400" />
                      Tes Actions du Jour
                    </h3>

                    <div className="grid gap-3">
                      {[
                        { label: 'Beauté', icon: '💄', value: getCurrentDayData()?.actions.beauty },
                        { label: 'Mental', icon: '🧠', value: getCurrentDayData()?.actions.mental },
                        { label: 'Lifestyle', icon: '✨', value: getCurrentDayData()?.actions.lifestyle }
                      ].map((action, index) => (
                        <div key={index} className={`p-4 rounded-xl ${theme === 'dark' ? 'bg-stone-800' : 'bg-stone-50'}`}>
                          <div className="flex items-start gap-3">
                            <span className="text-2xl">{action.icon}</span>
                            <div>
                              <h4 className="font-semibold text-sm mb-1">{action.label}</h4>
                              <p className="text-sm text-stone-600 dark:text-stone-400">{action.value}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Notes */}
                  <div className="space-y-2">
                    <label className="font-semibold text-sm">Notes du jour</label>
                    <Textarea
                      placeholder="Note tes pensées, tes ressentis..."
                      value={challengeProgress.notes[currentDay] || ''}
                      onChange={(e) => updateDayNotes(currentDay, e.target.value)}
                      rows={4}
                      className={theme === 'dark' ? 'bg-stone-800 border-stone-700' : 'bg-stone-50'}
                    />
                  </div>

                  {/* Complete Button */}
                  <Button
                    onClick={handleCompleteDay}
                    className={`w-full h-14 text-base font-semibold ${
                      challengeProgress.completedDays.includes(currentDay)
                        ? 'bg-green-500 hover:bg-green-600'
                        : 'bg-gradient-to-r from-rose-400 via-pink-400 to-orange-300 hover:from-rose-500 hover:via-pink-500 hover:to-orange-400'
                    } text-white`}
                  >
                    {challengeProgress.completedDays.includes(currentDay) ? (
                      <>
                        <Check className="mr-2 w-5 h-5" />
                        Jour Complété ✓
                      </>
                    ) : (
                      <>
                        <Sparkles className="mr-2 w-5 h-5" />
                        J'ai complété ce jour
                      </>
                    )}
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>
        )}

        {/* Journal View */}
        {currentView === 'journal' && (
          <div className="p-6 space-y-6 max-w-lg mx-auto">
            {/* Header */}
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setCurrentView('dashboard')}
              >
                <X className="w-5 h-5" />
              </Button>
              <h1 className="text-2xl font-bold">Mon Journal</h1>
            </div>

            {/* New Entry Form */}
            <Card className={`border-none shadow-lg ${theme === 'dark' ? 'bg-stone-900' : 'bg-white'}`}>
              <CardHeader>
                <CardTitle>Nouvelle Entrée</CardTitle>
                <CardDescription>Exprime-toi librement</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Comment je me sens aujourd'hui ?</label>
                  <Textarea
                    placeholder="Ton humeur du moment..."
                    value={newJournalEntry.mood}
                    onChange={(e) => setNewJournalEntry({ ...newJournalEntry, mood: e.target.value })}
                    rows={2}
                    className={theme === 'dark' ? 'bg-stone-800 border-stone-700' : 'bg-stone-50'}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Qu'est-ce qui m'a apporté du glow ?</label>
                  <Textarea
                    placeholder="Les petits moments de joie..."
                    value={newJournalEntry.glow}
                    onChange={(e) => setNewJournalEntry({ ...newJournalEntry, glow: e.target.value })}
                    rows={2}
                    className={theme === 'dark' ? 'bg-stone-800 border-stone-700' : 'bg-stone-50'}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Qu'est-ce que j'ai appris ?</label>
                  <Textarea
                    placeholder="Tes découvertes et apprentissages..."
                    value={newJournalEntry.learned}
                    onChange={(e) => setNewJournalEntry({ ...newJournalEntry, learned: e.target.value })}
                    rows={2}
                    className={theme === 'dark' ? 'bg-stone-800 border-stone-700' : 'bg-stone-50'}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Journal libre</label>
                  <Textarea
                    placeholder="Écris tout ce qui te passe par la tête..."
                    value={newJournalEntry.freeContent}
                    onChange={(e) => setNewJournalEntry({ ...newJournalEntry, freeContent: e.target.value })}
                    rows={3}
                    className={theme === 'dark' ? 'bg-stone-800 border-stone-700' : 'bg-stone-50'}
                  />
                </div>

                <Button onClick={handleSaveJournalEntry} className="w-full bg-rose-500 hover:bg-rose-600 text-white">
                  <Plus className="mr-2 w-4 h-4" />
                  Ajouter au Journal
                </Button>
              </CardContent>
            </Card>

            {/* Journal History */}
            <div className="space-y-4">
              <h2 className="text-lg font-semibold">Historique</h2>
              {journalEntries.length === 0 ? (
                <div className={`text-center p-8 rounded-xl ${theme === 'dark' ? 'bg-stone-900' : 'bg-white'}`}>
                  <BookOpen className="w-12 h-12 mx-auto mb-3 text-stone-400" />
                  <p className="text-stone-500 dark:text-stone-500">Aucune entrée pour le moment</p>
                </div>
              ) : (
                journalEntries.map((entry) => (
                  <Card key={entry.id} className={`border-none shadow-md ${theme === 'dark' ? 'bg-stone-900' : 'bg-white'}`}>
                    <CardContent className="p-4 space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-stone-500 dark:text-stone-500">
                          {new Date(entry.date).toLocaleDateString('fr-FR', {
                            day: 'numeric',
                            month: 'long',
                            year: 'numeric'
                          })}
                        </span>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-red-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20"
                          onClick={() => deleteJournalEntry(entry.id)}
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                      {entry.mood && (
                        <div>
                          <p className="text-xs text-stone-500 dark:text-stone-500 mb-1">Humeur</p>
                          <p className="text-sm">{entry.mood}</p>
                        </div>
                      )}
                      {entry.glow && (
                        <div>
                          <p className="text-xs text-stone-500 dark:text-stone-500 mb-1">Glow du jour</p>
                          <p className="text-sm">{entry.glow}</p>
                        </div>
                      )}
                      {entry.learned && (
                        <div>
                          <p className="text-xs text-stone-500 dark:text-stone-500 mb-1">Appris</p>
                          <p className="text-sm">{entry.learned}</p>
                        </div>
                      )}
                      {entry.freeContent && (
                        <div>
                          <p className="text-xs text-stone-500 dark:text-stone-500 mb-1">Libre</p>
                          <p className="text-sm">{entry.freeContent}</p>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))
              )}
            </div>
          </div>
        )}

        {/* Trackers View */}
        {currentView === 'trackers' && (
          <div className="p-6 space-y-6 max-w-lg mx-auto">
            {/* Header */}
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setCurrentView('dashboard')}
              >
                <X className="w-5 h-5" />
              </Button>
              <h1 className="text-2xl font-bold">Trackers Glow Up</h1>
            </div>

            {/* Today's Trackers */}
            <Card className={`border-none shadow-lg ${theme === 'dark' ? 'bg-stone-900' : 'bg-white'}`}>
              <CardHeader>
                <CardTitle>Aujourd'hui</CardTitle>
                <CardDescription>{new Date().toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long' })}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Hydration */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Droplet className="w-5 h-5 text-blue-400" />
                    <h3 className="font-semibold">Hydratation</h3>
                    <span className="ml-auto text-sm text-stone-500 dark:text-stone-500">{getTodayTracker().waterGlasses} / 8 verres</span>
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    {[...Array(8)].map((_, i) => (
                      <Button
                        key={i}
                        variant={i < getTodayTracker().waterGlasses ? 'default' : 'outline'}
                        size="icon"
                        className={`w-10 h-10 ${i < getTodayTracker().waterGlasses ? 'bg-blue-500 hover:bg-blue-600' : ''}`}
                        onClick={() => updateTodayTracker({ waterGlasses: i < getTodayTracker().waterGlasses ? i : i + 1 })}
                      >
                        💧
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Sleep */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Moon className="w-5 h-5 text-purple-400" />
                    <h3 className="font-semibold">Sommeil</h3>
                    <span className="ml-auto text-sm text-stone-500 dark:text-stone-500">{getTodayTracker().sleepHours}h</span>
                  </div>
                  <Input
                    type="number"
                    step="0.5"
                    min="0"
                    max="12"
                    placeholder="Nombre d'heures"
                    value={getTodayTracker().sleepHours || ''}
                    onChange={(e) => updateTodayTracker({ sleepHours: parseFloat(e.target.value) || 0 })}
                    className={theme === 'dark' ? 'bg-stone-800 border-stone-700' : 'bg-stone-50'}
                  />
                </div>

                {/* Mood */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Smile className="w-5 h-5 text-yellow-400" />
                    <h3 className="font-semibold">Humeur</h3>
                  </div>
                  <div className="flex gap-2 justify-between">
                    {['😢', '😕', '😐', '🙂', '😄'].map((emoji, i) => (
                      <Button
                        key={i}
                        variant={getTodayTracker().mood === i + 1 ? 'default' : 'outline'}
                        size="icon"
                        className={`w-12 h-12 text-2xl ${getTodayTracker().mood === i + 1 ? 'bg-yellow-500 hover:bg-yellow-600' : ''}`}
                        onClick={() => updateTodayTracker({ mood: i + 1 })}
                      >
                        {emoji}
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Activity */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Zap className="w-5 h-5 text-orange-400" />
                    <h3 className="font-semibold">Activité / Mouvement</h3>
                    <span className="ml-auto text-sm text-stone-500 dark:text-stone-500">{getTodayTracker().activityMinutes} min</span>
                  </div>
                  <Input
                    type="number"
                    min="0"
                    max="180"
                    placeholder="Minutes d'activité"
                    value={getTodayTracker().activityMinutes || ''}
                    onChange={(e) => updateTodayTracker({ activityMinutes: parseInt(e.target.value) || 0 })}
                    className={theme === 'dark' ? 'bg-stone-800 border-stone-700' : 'bg-stone-50'}
                  />
                </div>

                {/* Skincare */}
                <div className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-rose-100 to-pink-100 dark:from-rose-900/30 dark:to-pink-900/30">
                  <div className="flex items-center gap-3">
                    <Activity className="w-5 h-5 text-rose-500" />
                    <div>
                      <h3 className="font-semibold">Skincare complété</h3>
                      <p className="text-xs text-stone-600 dark:text-stone-400">Routine du jour</p>
                    </div>
                  </div>
                  <Switch
                    checked={getTodayTracker().skincareCompleted}
                    onCheckedChange={(checked) => updateTodayTracker({ skincareCompleted: checked })}
                  />
                </div>

                {/* Habits */}
                <div className="space-y-3">
                  <h3 className="font-semibold flex items-center gap-2">
                    <Lightbulb className="w-5 h-5 text-green-400" />
                    Habitudes quotidiennes
                  </h3>
                  <div className="space-y-2">
                    {[
                      'Méditation 5 min',
                      'Journaling',
                      'Gratitude',
                      'Exercice',
                      'Lecture',
                      'Pas de scroll avant de dormir'
                    ].map((habit) => (
                      <div key={habit} className="flex items-center justify-between p-3 rounded-lg bg-stone-50 dark:bg-stone-800">
                        <span className="text-sm">{habit}</span>
                        <Switch
                          checked={getTodayTracker().habits[habit] || false}
                          onCheckedChange={(checked) =>
                            updateTodayTracker({
                              habits: { ...getTodayTracker().habits, [habit]: checked }
                            })
                          }
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Routine View */}
        {currentView === 'routine' && (
          <div className="p-6 space-y-6 max-w-lg mx-auto">
            {/* Header */}
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setCurrentView('dashboard')}
              >
                <X className="w-5 h-5" />
              </Button>
              <h1 className="text-2xl font-bold">Ma Routine Glow Up</h1>
            </div>

            {/* Routine Card */}
            <Card className={`border-none shadow-lg ${theme === 'dark' ? 'bg-stone-900' : 'bg-white'}`}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Layers className="w-5 h-5 text-rose-400" />
                  Routine Quotidienne - 5 Étapes
                </CardTitle>
                <CardDescription>Personnalise ta routine Glow Up</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {[1, 2, 3, 4, 5].map((step) => (
                  <div key={step} className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-rose-400 to-pink-400 text-white flex items-center justify-center text-sm font-semibold">
                        {step}
                      </div>
                      <Input
                        placeholder={`Étape ${step}`}
                        value={(routine as any)[`step${step}`]}
                        onChange={(e) => updateRoutine({ [`step${step}`]: e.target.value })}
                        className={theme === 'dark' ? 'bg-stone-800 border-stone-700' : 'bg-stone-50'}
                      />
                    </div>
                  </div>
                ))}

                <div className="pt-4 border-t border-stone-200 dark:border-stone-700">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold">Routine complétée aujourd'hui ?</p>
                      <p className="text-xs text-stone-500 dark:text-stone-500">Marque quand tu as fini</p>
                    </div>
                    <Switch
                      checked={routineCompletedDates.includes(todayDate)}
                      onCheckedChange={(checked) => setRoutineCompleted(todayDate, checked)}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Today's Routine Status */}
            {routineCompletedDates.includes(todayDate) && (
              <div className="flex items-center gap-3 p-4 rounded-xl bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400">
                <Check className="w-6 h-6" />
                <p className="font-semibold">Routine Glow Up complétée aujourd'hui ! ✨</p>
              </div>
            )}
          </div>
        )}

        {/* Vision Board View */}
        {currentView === 'vision-board' && (
          <div className="p-6 space-y-6 max-w-lg mx-auto">
            {/* Header */}
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setCurrentView('dashboard')}
              >
                <X className="w-5 h-5" />
              </Button>
              <h1 className="text-2xl font-bold">Vision Board</h1>
            </div>

            {/* Add Image Form */}
            <Card className={`border-none shadow-lg ${theme === 'dark' ? 'bg-stone-900' : 'bg-white'}`}>
              <CardHeader>
                <CardTitle>Ajouter une image</CardTitle>
                <CardDescription>Upload une image qui t'inspire</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">URL de l'image</label>
                  <Input
                    placeholder="https://example.com/image.jpg"
                    id="vision-image-url"
                    className={theme === 'dark' ? 'bg-stone-800 border-stone-700' : 'bg-stone-50'}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Légende (optionnel)</label>
                  <Input
                    placeholder="Une description ou affirmation..."
                    id="vision-image-caption"
                    className={theme === 'dark' ? 'bg-stone-800 border-stone-700' : 'bg-stone-50'}
                  />
                </div>
                <Button
                  onClick={() => {
                    const urlInput = document.getElementById('vision-image-url') as HTMLInputElement;
                    const captionInput = document.getElementById('vision-image-caption') as HTMLInputElement;
                    if (urlInput.value) {
                      addVisionBoardImage(urlInput.value, captionInput.value);
                      urlInput.value = '';
                      captionInput.value = '';
                    }
                  }}
                  className="w-full bg-gradient-to-r from-rose-400 via-pink-400 to-orange-300 text-white"
                >
                  <Plus className="mr-2 w-4 h-4" />
                  Ajouter au Vision Board
                </Button>
              </CardContent>
            </Card>

            {/* Affirmations Section */}
            <Card className={`border-none shadow-lg ${theme === 'dark' ? 'bg-gradient-to-br from-rose-900/30 to-pink-900/30' : 'bg-gradient-to-br from-rose-50 to-pink-50'}`}>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <Star className="w-5 h-5 text-rose-400" />
                  Affirmation du jour
                </h3>
                <p className="text-lg italic text-stone-700 dark:text-stone-300 font-serif">
                  "{bonusAffirmations[Math.floor(Math.random() * bonusAffirmations.length)]}"
                </p>
              </CardContent>
            </Card>

            {/* Images Grid */}
            <div className="space-y-4">
              <h2 className="text-lg font-semibold">Mes Images</h2>
              {visionBoardImages.length === 0 ? (
                <div className={`text-center p-8 rounded-xl ${theme === 'dark' ? 'bg-stone-900' : 'bg-white'}`}>
                  <ImageIcon className="w-12 h-12 mx-auto mb-3 text-stone-400" />
                  <p className="text-stone-500 dark:text-stone-500">Aucune image pour le moment</p>
                  <p className="text-xs text-stone-400 dark:text-stone-600 mt-1">Ajoute des images qui t'inspirent</p>
                </div>
              ) : (
                <div className="grid grid-cols-2 gap-4">
                  {visionBoardImages.map((image) => (
                    <div key={image.id} className={`relative rounded-xl overflow-hidden shadow-md ${theme === 'dark' ? 'bg-stone-900' : 'bg-white'}`}>
                      <img
                        src={image.url}
                        alt={image.caption || 'Vision board image'}
                        className="w-full aspect-square object-cover"
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = 'none';
                        }}
                      />
                      {image.caption && (
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-2">
                          <p className="text-xs text-white font-medium">{image.caption}</p>
                        </div>
                      )}
                      <Button
                        variant="destructive"
                        size="icon"
                        className="absolute top-2 right-2 w-8 h-8"
                        onClick={() => removeVisionBoardImage(image.id)}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Bonus View */}
        {currentView === 'bonus' && (
          <div className="p-6 space-y-6 max-w-lg mx-auto">
            {/* Header */}
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setCurrentView('dashboard')}
              >
                <X className="w-5 h-5" />
              </Button>
              <h1 className="text-2xl font-bold">Mes Bonus</h1>
            </div>

            {/* Affirmations Audio */}
            <Card className={`border-none shadow-lg ${theme === 'dark' ? 'bg-stone-900' : 'bg-white'}`}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Gift className="w-5 h-5 text-rose-400" />
                  Affirmations Audio
                </CardTitle>
                <CardDescription>Écoute les affirmations puissantes</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {bonusAffirmations.slice(0, 5).map((affirmation, i) => (
                  <div
                    key={i}
                    className={`p-4 rounded-xl ${theme === 'dark' ? 'bg-stone-800' : 'bg-stone-50'} border-l-4 border-rose-400`}
                  >
                    <p className="text-sm italic">"{affirmation}"</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Affirmations Écrites */}
            <Card className={`border-none shadow-lg ${theme === 'dark' ? 'bg-stone-900' : 'bg-white'}`}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-400" />
                  Affirmations Écrites
                </CardTitle>
                <CardDescription>Ton arsenal de pensées positives</CardDescription>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-64">
                  <div className="space-y-2">
                    {bonusAffirmations.map((affirmation, i) => (
                      <div
                        key={i}
                        className={`p-3 rounded-lg ${theme === 'dark' ? 'bg-stone-800' : 'bg-stone-50'}`}
                      >
                        <p className="text-sm">✨ {affirmation}</p>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>

            {/* PDF Checklists */}
            <Card className={`border-none shadow-lg ${theme === 'dark' ? 'bg-stone-900' : 'bg-white'}`}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Download className="w-5 h-5 text-blue-400" />
                  Checklists PDF
                </CardTitle>
                <CardDescription>Des guides pratiques à télécharger</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  'Checklist Morning Routine',
                  'Checklist Evening Routine',
                  'Checklist Weekly Self-Care',
                  'Checklist Monthly Goals'
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-800 flex items-center justify-center">
                        <Download className="w-5 h-5 text-blue-600 dark:text-blue-300" />
                      </div>
                      <div>
                        <p className="font-semibold text-sm">{item}</p>
                        <p className="text-xs text-stone-500 dark:text-stone-500">Guide PDF</p>
                      </div>
                    </div>
                    <Badge variant="outline" className="text-xs">Bientôt</Badge>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Mini-Guide Soft Life */}
            <Card className={`border-none shadow-lg ${theme === 'dark' ? 'bg-gradient-to-br from-amber-900/30 to-orange-900/30' : 'bg-gradient-to-br from-amber-50 to-orange-50'}`}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Sun className="w-5 h-5 text-amber-400" />
                  Mini-Guide Soft Life
                </CardTitle>
                <CardDescription>Astuces pour une vie douce et épanouie</CardDescription>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-64">
                  <div className="space-y-3">
                    {bonusAffirmations.map((tip, i) => (
                      <div
                        key={i}
                        className={`p-3 rounded-lg ${theme === 'dark' ? 'bg-stone-800' : 'bg-white'}`}
                      >
                        <p className="text-sm">🌸 {tip}</p>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Settings View */}
        {currentView === 'settings' && (
          <div className="p-6 space-y-6 max-w-lg mx-auto">
            {/* Header */}
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setCurrentView('dashboard')}
              >
                <X className="w-5 h-5" />
              </Button>
              <h1 className="text-2xl font-bold">Paramètres</h1>
            </div>

            {/* Progress Overview */}
            <Card className={`border-none shadow-lg ${theme === 'dark' ? 'bg-gradient-to-br from-rose-900/30 to-pink-900/30' : 'bg-gradient-to-br from-rose-50 to-pink-50'}`}>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-rose-400" />
                  Progression Globale
                </h3>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-stone-600 dark:text-stone-400">Jours complétés</span>
                    <span className="font-semibold">{challengeProgress.completedDays.length} / 30</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-stone-600 dark:text-stone-400">Pourcentage</span>
                    <span className="font-semibold text-rose-500">{progressPercentage}%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-stone-600 dark:text-stone-400">Journal</span>
                    <span className="font-semibold">{journalEntries.length} entrées</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-stone-600 dark:text-stone-400">Vision Board</span>
                    <span className="font-semibold">{visionBoardImages.length} images</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Theme Toggle */}
            <Card className={`border-none shadow-lg ${theme === 'dark' ? 'bg-stone-900' : 'bg-white'}`}>
              <CardHeader>
                <CardTitle>Thème</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between p-4 rounded-xl bg-stone-50 dark:bg-stone-800">
                  <div className="flex items-center gap-3">
                    {theme === 'light' ? (
                      <Sun className="w-6 h-6 text-amber-400" />
                    ) : (
                      <Moon className="w-6 h-6 text-purple-400" />
                    )}
                    <div>
                      <p className="font-semibold">Mode {theme === 'light' ? 'Clair' : 'Sombre'}</p>
                      <p className="text-xs text-stone-500 dark:text-stone-500">Change l'apparence</p>
                    </div>
                  </div>
                  <Switch
                    checked={theme === 'dark'}
                    onCheckedChange={(checked) => setTheme(checked ? 'dark' : 'light')}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Notifications */}
            <Card className={`border-none shadow-lg ${theme === 'dark' ? 'bg-stone-900' : 'bg-white'}`}>
              <CardHeader>
                <CardTitle>Notifications</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between p-4 rounded-xl bg-stone-50 dark:bg-stone-800">
                  <div className="flex items-center gap-3">
                    {notificationsEnabled ? (
                      <Bell className="w-6 h-6 text-rose-400" />
                    ) : (
                      <BellOff className="w-6 h-6 text-stone-400" />
                    )}
                    <div>
                      <p className="font-semibold">Notifications</p>
                      <p className="text-xs text-stone-500 dark:text-stone-500">Rappels quotidiens</p>
                    </div>
                  </div>
                  <Switch
                    checked={notificationsEnabled}
                    onCheckedChange={setNotificationsEnabled}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Export Data */}
            <Card className={`border-none shadow-lg ${theme === 'dark' ? 'bg-stone-900' : 'bg-white'}`}>
              <CardHeader>
                <CardTitle>Export</CardTitle>
                <CardDescription>Télécharge tes données</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button
                  variant="outline"
                  className="w-full justify-start"
                  onClick={() => {
                    const data = {
                      journal: journalEntries,
                      trackers,
                      routine,
                      visionBoardImages,
                      challengeProgress
                    };
                    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
                    const url = URL.createObjectURL(blob);
                    const a = document.createElement('a');
                    a.href = url;
                    a.download = `glow-up-export-${new Date().toISOString().split('T')[0]}.json`;
                    a.click();
                  }}
                >
                  <Download className="mr-2 w-4 h-4" />
                  Exporter toutes les données
                </Button>
              </CardContent>
            </Card>
          </div>
        )}
      </main>

      {/* Bottom Navigation */}
      <nav className={`fixed bottom-0 left-0 right-0 ${theme === 'dark' ? 'bg-stone-900/95 border-t border-stone-800' : 'bg-white/95 border-t border-stone-200'} backdrop-blur-sm safe-area-pb`}>
        <div className="flex items-center justify-around max-w-lg mx-auto">
          <Button
            variant="ghost"
            className={`flex-1 h-16 flex-col gap-1 rounded-none ${currentView === 'dashboard' ? 'text-rose-500' : ''}`}
            onClick={() => setCurrentView('dashboard')}
          >
            <Home className="w-6 h-6" />
            <span className="text-xs">Accueil</span>
          </Button>
          <Button
            variant="ghost"
            className={`flex-1 h-16 flex-col gap-1 rounded-none ${currentView === 'challenge' ? 'text-rose-500' : ''}`}
            onClick={() => setCurrentView('challenge')}
          >
            <Sparkles className="w-6 h-6" />
            <span className="text-xs">Challenge</span>
          </Button>
          <Button
            variant="ghost"
            className={`flex-1 h-16 flex-col gap-1 rounded-none ${currentView === 'journal' ? 'text-rose-500' : ''}`}
            onClick={() => setCurrentView('journal')}
          >
            <BookOpen className="w-6 h-6" />
            <span className="text-xs">Journal</span>
          </Button>
          <Button
            variant="ghost"
            className={`flex-1 h-16 flex-col gap-1 rounded-none ${currentView === 'trackers' ? 'text-rose-500' : ''}`}
            onClick={() => setCurrentView('trackers')}
          >
            <Target className="w-6 h-6" />
            <span className="text-xs">Trackers</span>
          </Button>
          <Button
            variant="ghost"
            className={`flex-1 h-16 flex-col gap-1 rounded-none ${currentView === 'settings' ? 'text-rose-500' : ''}`}
            onClick={() => setCurrentView('settings')}
          >
            <Settings className="w-6 h-6" />
            <span className="text-xs">Profil</span>
          </Button>
        </div>
      </nav>

      <style jsx global>{`
        .safe-area-pb {
          padding-bottom: env(safe-area-inset-bottom, 0px);
        }
      `}</style>
    </div>
  );
}
