package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Bluetooth32: ImageVector
  get() {
    if (_bluetooth32 != null) {
      return _bluetooth32!!
    }
    _bluetooth32 = fluentIcon(name = "Filled.Bluetooth32", 32f) {
      materialPath {
          moveTo(15.25F, 2.104F)
          curveToRelative(0.456F, -0.199F, 0.986F, -0.108F, 1.35F, 0.23F)
          lineToRelative(7.0F, 6.5F)
          curveToRelative(0.258F, 0.24F, 0.403F, 0.576F, 0.4F, 0.928F)
          curveToRelative(-0.003F, 0.352F, -0.155F, 0.686F, -0.418F, 0.92F)
          lineTo(17.627F, 16.0F)
          lineToRelative(5.956F, 5.318F)
          curveToRelative(0.262F, 0.234F, 0.414F, 0.568F, 0.417F, 0.92F)
          curveToRelative(0.003F, 0.352F, -0.142F, 0.689F, -0.4F, 0.928F)
          lineToRelative(-7.0F, 6.5F)
          curveToRelative(-0.364F, 0.338F, -0.894F, 0.428F, -1.35F, 0.23F)
          curveToRelative(-0.455F, -0.199F, -0.75F, -0.649F, -0.75F, -1.146F)
          verticalLineToRelative(-9.958F)
          lineToRelative(-4.918F, 4.39F)
          curveToRelative(-0.514F, 0.46F, -1.305F, 0.416F, -1.764F, -0.1F)
          curveToRelative(-0.46F, -0.514F, -0.415F, -1.305F, 0.1F, -1.764F)
          lineTo(13.873F, 16.0F)
          lineToRelative(-5.955F, -5.318F)
          curveToRelative(-0.516F, -0.46F, -0.56F, -1.25F, -0.1F, -1.764F)
          curveToRelative(0.46F, -0.515F, 1.25F, -0.56F, 1.764F, -0.1F)
          lineToRelative(4.918F, 4.39F)
          verticalLineTo(3.25F)
          curveToRelative(0.0F, -0.497F, 0.295F, -0.947F, 0.75F, -1.146F)
          close()
          moveTo(17.0F, 18.792F)
          verticalLineToRelative(7.091F)
          lineToRelative(3.893F, -3.615F)
          lineTo(17.0F, 18.792F)
          close()
          moveToRelative(0.0F, -5.584F)
          lineToRelative(3.893F, -3.476F)
          lineTo(17.0F, 6.117F)
          verticalLineToRelative(7.091F)
          close()        
      }
    }
    return _bluetooth32!!
  }

private var _bluetooth32: ImageVector? = null
