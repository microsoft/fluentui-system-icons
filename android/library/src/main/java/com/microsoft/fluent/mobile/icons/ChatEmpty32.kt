package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ChatEmpty32: ImageVector
  get() {
    if (_chatEmpty32 != null) {
      return _chatEmpty32!!
    }
    _chatEmpty32 = fluentIcon(name = "Filled.ChatEmpty32", 32f) {
      materialPath {
          moveTo(2.0F, 16.0F)
          curveTo(2.0F, 8.268F, 8.268F, 2.0F, 16.0F, 2.0F)
          reflectiveCurveToRelative(14.0F, 6.268F, 14.0F, 14.0F)
          reflectiveCurveToRelative(-6.268F, 14.0F, -14.0F, 14.0F)
          curveToRelative(-2.368F, 0.0F, -4.602F, -0.589F, -6.56F, -1.629F)
          lineToRelative(-5.528F, 1.572F)
          curveToRelative(-1.13F, 0.322F, -2.174F, -0.723F, -1.853F, -1.853F)
          lineToRelative(1.572F, -5.527F)
          curveTo(2.59F, 20.605F, 2.0F, 18.37F, 2.0F, 16.0F)
          close()        
      }
    }
    return _chatEmpty32!!
  }

private var _chatEmpty32: ImageVector? = null
