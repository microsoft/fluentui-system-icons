package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ColorBackgroundAccent20: ImageVector
  get() {
    if (_colorBackgroundAccent20 != null) {
      return _colorBackgroundAccent20!!
    }
    _colorBackgroundAccent20 = fluentIcon(name = "Regular.ColorBackgroundAccent20", 20f) {
      materialPath {
          moveTo(2.75F, 11.415F)
          lineToRelative(0.328F, 0.328F)
          curveToRelative(1.172F, 1.171F, 3.071F, 1.171F, 4.243F, 0.0F)
          lineTo(8.0F, 11.063F)
          curveTo(8.028F, 12.404F, 8.96F, 14.0F, 10.75F, 14.0F)
          curveToRelative(1.816F, 0.0F, 2.75F, -1.646F, 2.75F, -3.0F)
          curveToRelative(0.0F, -1.014F, -0.532F, -1.956F, -0.862F, -2.472F)
          curveToRelative(-0.19F, -0.295F, -0.377F, -0.546F, -0.516F, -0.722F)
          lineToRelative(-0.007F, -0.009F)
          lineToRelative(-0.234F, -0.282F)
          lineTo(11.869F, 7.5F)
          curveToRelative(-0.224F, -0.25F, -0.524F, -0.417F, -0.85F, -0.477F)
          curveToRelative(0.062F, -0.809F, -0.203F, -1.638F, -0.794F, -2.274F)
          horizontalLineTo(15.5F)
          curveToRelative(0.966F, 0.0F, 1.75F, 0.784F, 1.75F, 1.75F)
          verticalLineToRelative(7.0F)
          curveToRelative(0.0F, 0.966F, -0.784F, 1.75F, -1.75F, 1.75F)
          horizontalLineToRelative(-11.0F)
          curveToRelative(-0.966F, 0.0F, -1.75F, -0.784F, -1.75F, -1.75F)
          verticalLineToRelative(-2.085F)
          close()        
      }
    }
    return _colorBackgroundAccent20!!
  }

private var _colorBackgroundAccent20: ImageVector? = null
