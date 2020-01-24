package com.microsoft.fluent.mobile.icons.sample

import android.app.Application
import androidx.appcompat.app.AppCompatDelegate

class FluentApplication : Application() {

    override fun onCreate() {
        super.onCreate()
        AppCompatDelegate.setDefaultNightMode(AppCompatDelegate.MODE_NIGHT_FOLLOW_SYSTEM)
    }
}