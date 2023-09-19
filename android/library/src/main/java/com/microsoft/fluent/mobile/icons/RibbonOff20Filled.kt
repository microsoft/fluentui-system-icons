package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.RibbonOff20: ImageVector
  get() {
    if (_ribbonOff20 != null) {
      return _ribbonOff20!!
    }
    _ribbonOff20 = fluentIcon(name = "Filled.RibbonOff20", 20f) {
      materialPath {
          moveTo(4.625F, 5.332F)
          curveTo(4.224F, 6.135F, 4.0F, 7.042F, 4.0F, 8.0F)
          curveToRelative(0.0F, 3.314F, 2.686F, 6.0F, 6.0F, 6.0F)
          curveToRelative(0.959F, 0.0F, 1.865F, -0.225F, 2.668F, -0.624F)
          lineToRelative(0.74F, 0.74F)
          curveTo(12.4F, 14.678F, 11.238F, 15.0F, 10.0F, 15.0F)
          curveToRelative(-1.487F, 0.0F, -2.866F, -0.464F, -4.0F, -1.255F)
          verticalLineTo(17.5F)
          curveToRelative(0.0F, 0.187F, 0.105F, 0.359F, 0.271F, 0.444F)
          curveToRelative(0.167F, 0.086F, 0.367F, 0.072F, 0.52F, -0.037F)
          lineTo(10.0F, 16.0F)
          lineToRelative(3.21F, 1.907F)
          curveToRelative(0.152F, 0.108F, 0.352F, 0.123F, 0.519F, 0.037F)
          curveTo(13.895F, 17.86F, 14.0F, 17.687F, 14.0F, 17.5F)
          verticalLineToRelative(-2.793F)
          lineToRelative(3.146F, 3.147F)
          curveToRelative(0.196F, 0.195F, 0.512F, 0.195F, 0.708F, 0.0F)
          curveToRelative(0.195F, -0.196F, 0.195F, -0.512F, 0.0F, -0.708F)
          lineToRelative(-15.0F, -15.0F)
          curveToRelative(-0.196F, -0.195F, -0.512F, -0.195F, -0.708F, 0.0F)
          curveToRelative(-0.195F, 0.196F, -0.195F, 0.512F, 0.0F, 0.708F)
          lineToRelative(2.479F, 2.478F)
          close()
          moveToRelative(1.194F, -1.635F)
          lineToRelative(8.484F, 8.485F)
          curveTo(15.353F, 11.1F, 16.0F, 9.625F, 16.0F, 8.0F)
          curveToRelative(0.0F, -3.314F, -2.686F, -6.0F, -6.0F, -6.0F)
          curveToRelative(-1.626F, 0.0F, -3.1F, 0.647F, -4.181F, 1.697F)
          close()        
      }
    }
    return _ribbonOff20!!
  }

private var _ribbonOff20: ImageVector? = null
