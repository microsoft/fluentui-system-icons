package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Checkmark20: ImageVector
  get() {
    if (_checkmark20 != null) {
      return _checkmark20!!
    }
    _checkmark20 = fluentIcon(name = "Regular.Checkmark20", 20f) {
      materialPath {
          moveTo(3.374F, 10.168F)
          curveToRelative(-0.184F, -0.207F, -0.5F, -0.225F, -0.706F, -0.042F)
          curveToRelative(-0.207F, 0.184F, -0.225F, 0.5F, -0.042F, 0.706F)
          lineToRelative(4.0F, 4.5F)
          curveToRelative(0.191F, 0.215F, 0.524F, 0.225F, 0.728F, 0.022F)
          lineToRelative(10.5F, -10.5F)
          curveToRelative(0.195F, -0.196F, 0.195F, -0.512F, 0.0F, -0.708F)
          curveToRelative(-0.196F, -0.195F, -0.512F, -0.195F, -0.707F, 0.0F)
          lineTo(7.02F, 14.271F)
          lineToRelative(-3.647F, -4.103F)
          close()        
      }
    }
    return _checkmark20!!
  }

private var _checkmark20: ImageVector? = null
