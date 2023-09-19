package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowForward48: ImageVector
  get() {
    if (_arrowForward48 != null) {
      return _arrowForward48!!
    }
    _arrowForward48 = fluentIcon(name = "Filled.ArrowForward48", 48f) {
      materialPath {
          moveTo(33.778F, 23.0F)
          lineToRelative(-6.208F, 6.208F)
          curveToRelative(-0.683F, 0.683F, -0.683F, 1.791F, 0.0F, 2.475F)
          curveToRelative(0.643F, 0.643F, 1.663F, 0.68F, 2.35F, 0.113F)
          lineToRelative(0.125F, -0.113F)
          lineToRelative(9.192F, -9.193F)
          curveToRelative(0.644F, -0.643F, 0.681F, -1.662F, 0.114F, -2.35F)
          lineToRelative(-0.114F, -0.125F)
          lineToRelative(-9.192F, -9.192F)
          curveToRelative(-0.683F, -0.683F, -1.791F, -0.683F, -2.475F, 0.0F)
          curveToRelative(-0.643F, 0.643F, -0.68F, 1.663F, -0.113F, 2.35F)
          lineToRelative(0.113F, 0.125F)
          lineToRelative(6.204F, 6.202F)
          horizontalLineTo(26.0F)
          curveToRelative(-3.342F, 0.0F, -6.455F, 0.744F, -9.157F, 2.168F)
          lineToRelative(-0.402F, 0.218F)
          curveToRelative(-2.763F, 1.55F, -5.006F, 3.793F, -6.555F, 6.555F)
          curveToRelative(-1.566F, 2.794F, -2.386F, 6.05F, -2.386F, 9.56F)
          curveToRelative(0.0F, 0.966F, 0.784F, 1.75F, 1.75F, 1.75F)
          reflectiveCurveTo(11.0F, 38.967F, 11.0F, 38.0F)
          curveToRelative(0.0F, -2.92F, 0.671F, -5.587F, 1.939F, -7.848F)
          curveToRelative(1.233F, -2.2F, 3.013F, -3.98F, 5.214F, -5.214F)
          curveToRelative(2.135F, -1.197F, 4.632F, -1.862F, 7.363F, -1.932F)
          lineTo(26.0F, 23.0F)
          horizontalLineToRelative(7.778F)
          close()        
      }
    }
    return _arrowForward48!!
  }

private var _arrowForward48: ImageVector? = null
