package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.InkingTool16: ImageVector
  get() {
    if (_inkingTool16 != null) {
      return _inkingTool16!!
    }
    _inkingTool16 = fluentIcon(name = "Filled.InkingTool16", 16f) {
      materialPath {
          moveTo(2.009F, 1.0F)
          curveToRelative(-0.552F, 0.0F, -1.0F, 0.448F, -1.0F, 1.0F)
          verticalLineToRelative(0.406F)
          curveTo(1.003F, 2.436F, 1.0F, 2.468F, 1.0F, 2.5F)
          verticalLineToRelative(1.0F)
          curveTo(1.0F, 4.328F, 1.672F, 5.0F, 2.5F, 5.0F)
          horizontalLineToRelative(0.252F)
          lineToRelative(0.001F, 0.003F)
          horizontalLineToRelative(10.494F)
          lineTo(13.248F, 5.0F)
          horizontalLineTo(13.5F)
          curveTo(14.328F, 5.0F, 15.0F, 4.328F, 15.0F, 3.5F)
          verticalLineTo(2.0F)
          curveToRelative(0.0F, -0.552F, -0.448F, -1.0F, -1.0F, -1.0F)
          horizontalLineTo(2.01F)
          close()
          moveToRelative(4.5F, 12.0F)
          curveToRelative(0.01F, 0.41F, 0.108F, 0.858F, 0.31F, 1.227F)
          curveToRelative(0.215F, 0.39F, 0.599F, 0.768F, 1.173F, 0.775F)
          horizontalLineToRelative(0.016F)
          curveToRelative(0.574F, -0.007F, 0.958F, -0.385F, 1.172F, -0.775F)
          curveToRelative(0.203F, -0.369F, 0.3F, -0.817F, 0.31F, -1.227F)
          horizontalLineTo(6.51F)
          close()
          moveToRelative(3.471F, -1.548F)
          lineToRelative(2.76F, -5.45F)
          horizontalLineTo(3.26F)
          lineToRelative(2.757F, 5.45F)
          curveTo(6.187F, 11.787F, 6.532F, 12.0F, 6.909F, 12.0F)
          horizontalLineToRelative(2.179F)
          curveToRelative(0.377F, 0.0F, 0.722F, -0.212F, 0.892F, -0.548F)
          close()        
      }
    }
    return _inkingTool16!!
  }

private var _inkingTool16: ImageVector? = null
