package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Snooze20: ImageVector
  get() {
    if (_snooze20 != null) {
      return _snooze20!!
    }
    _snooze20 = fluentIcon(name = "Regular.Snooze20", 20f) {
      materialPath {
          moveTo(10.5F, 4.0F)
          curveTo(10.224F, 4.0F, 10.0F, 4.224F, 10.0F, 4.5F)
          reflectiveCurveTo(10.224F, 5.0F, 10.5F, 5.0F)
          horizontalLineToRelative(4.028F)
          lineToRelative(-4.435F, 6.21F)
          curveToRelative(-0.109F, 0.152F, -0.123F, 0.352F, -0.038F, 0.519F)
          curveTo(10.141F, 11.895F, 10.313F, 12.0F, 10.5F, 12.0F)
          horizontalLineToRelative(5.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, -0.224F, 0.5F, -0.5F)
          reflectiveCurveTo(15.776F, 11.0F, 15.5F, 11.0F)
          horizontalLineToRelative(-4.028F)
          lineToRelative(4.435F, -6.21F)
          curveToRelative(0.109F, -0.152F, 0.123F, -0.352F, 0.038F, -0.519F)
          curveTo(15.859F, 4.105F, 15.687F, 4.0F, 15.5F, 4.0F)
          horizontalLineToRelative(-5.0F)
          close()
          moveToRelative(-6.0F, 6.0F)
          curveTo(4.224F, 10.0F, 4.0F, 10.224F, 4.0F, 10.5F)
          reflectiveCurveTo(4.224F, 11.0F, 4.5F, 11.0F)
          horizontalLineToRelative(2.96F)
          lineToRelative(-3.35F, 4.188F)
          curveToRelative(-0.12F, 0.15F, -0.144F, 0.355F, -0.06F, 0.529F)
          curveTo(4.132F, 15.89F, 4.307F, 16.0F, 4.5F, 16.0F)
          horizontalLineToRelative(4.0F)
          curveTo(8.776F, 16.0F, 9.0F, 15.776F, 9.0F, 15.5F)
          reflectiveCurveTo(8.776F, 15.0F, 8.5F, 15.0F)
          horizontalLineTo(5.54F)
          lineToRelative(3.35F, -4.188F)
          curveToRelative(0.12F, -0.15F, 0.144F, -0.355F, 0.06F, -0.529F)
          curveTo(8.868F, 10.11F, 8.693F, 10.0F, 8.5F, 10.0F)
          horizontalLineToRelative(-4.0F)
          close()        
      }
    }
    return _snooze20!!
  }

private var _snooze20: ImageVector? = null
