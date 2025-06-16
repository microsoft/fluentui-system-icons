import org.jetbrains.compose.desktop.application.dsl.TargetFormat.*

plugins {
    alias(libs.plugins.multiplatform)
    alias(libs.plugins.compose.compiler)
    alias(libs.plugins.compose)
    alias(libs.plugins.android.application)
}

kotlin {
    androidTarget()
    jvm()
    js {
        browser()
        binaries.executable()
    }
    wasmJs {
        browser()
        binaries.executable()
    }
    listOf(
        iosX64(),
        iosArm64(),
        iosSimulatorArm64()
    ).forEach {
        it.binaries.framework {
            baseName = "ComposeApp"
            isStatic = true
        }
    }

    sourceSets {
        commonMain.dependencies {
            implementation(compose.runtime)
            implementation(compose.foundation)
            implementation(compose.material3)
            implementation(compose.components.resources)

            implementation(project(":library"))
        }

        androidMain.dependencies {
            implementation(libs.androidx.activityCompose)
        }

        jvmMain.dependencies {
            implementation(compose.desktop.currentOs)
        }

    }
}

android {
    namespace = "com.microsoft.design.compose.demo"
    compileSdk = 35

    defaultConfig {
        minSdk = 21
        targetSdk = 35

        applicationId = "com.microsoft.design.compose.demo.androidApp"
        versionCode = 1
        versionName = "1.0.0"
    }
}

compose.desktop {
    application {
        mainClass = "MainKt"

        nativeDistributions {
            targetFormats(Dmg, Msi, Deb)
            packageName = "Multiplatform App"
            packageVersion = "1.0.0"

            macOS {
                bundleID = "com.microsoft.design.compose.demo.desktopApp"
            }
        }
    }
}
