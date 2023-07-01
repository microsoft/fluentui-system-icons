package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.TextFontSize20: ImageVector
  get() {
    if (_textFontSize20 != null) {
      return _textFontSize20!!
    }
    _textFontSize20 = fluentIcon(name = "Filled.TextFontSize20", 20f) {
      materialPath {
          moveTo(13.007F, 3.0F)
          curveToRelative(0.317F, 0.003F, 0.598F, 0.205F, 0.702F, 0.504F)
          lineToRelative(4.25F, 12.25F)
          curveToRelative(0.136F, 0.391F, -0.072F, 0.819F, -0.463F, 0.955F)
          curveToRelative(-0.391F, 0.135F, -0.819F, -0.072F, -0.954F, -0.463F)
          lineToRelative(-1.3F, -3.746F)
          horizontalLineToRelative(-4.657F)
          lineToRelative(-1.38F, 3.759F)
          curveToRelative(-0.108F, 0.293F, -0.386F, 0.488F, -0.698F, 0.491F)
          curveToRelative(-0.312F, 0.003F, -0.594F, -0.188F, -0.706F, -0.48F)
          lineTo(6.92F, 14.0F)
          horizontalLineTo(4.257F)
          lineToRelative(-0.799F, 2.25F)
          curveToRelative(-0.139F, 0.391F, -0.567F, 0.595F, -0.958F, 0.457F)
          curveToRelative(-0.39F, -0.139F, -0.594F, -0.567F, -0.456F, -0.958F)
          lineTo(4.793F, 8.0F)
          curveTo(4.898F, 7.704F, 5.176F, 7.505F, 5.49F, 7.5F)
          curveTo(5.803F, 7.496F, 6.086F, 7.687F, 6.2F, 7.98F)
          lineToRelative(2.282F, 5.895F)
          lineTo(12.296F, 3.49F)
          curveToRelative(0.11F, -0.296F, 0.394F, -0.493F, 0.711F, -0.49F)
          close()
          moveToRelative(-8.219F, 9.5F)
          horizontalLineToRelative(1.553F)
          lineToRelative(-0.81F, -2.093F)
          lineTo(4.788F, 12.5F)
          close()
          moveToRelative(8.192F, -6.52F)
          lineTo(11.136F, 11.0F)
          horizontalLineToRelative(3.586F)
          lineTo(12.98F, 5.98F)
          close()        
      }
    }
    return _textFontSize20!!
  }

private var _textFontSize20: ImageVector? = null
