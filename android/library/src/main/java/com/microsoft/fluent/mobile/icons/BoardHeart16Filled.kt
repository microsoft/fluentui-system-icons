package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.BoardHeart16: ImageVector
  get() {
    if (_boardHeart16 != null) {
      return _boardHeart16!!
    }
    _boardHeart16 = fluentIcon(name = "Filled.BoardHeart16", 16f) {
      materialPath {
          moveTo(7.5F, 2.0F)
          verticalLineToRelative(3.0F)
          horizontalLineTo(2.0F)
          verticalLineTo(4.5F)
          curveTo(2.0F, 3.12F, 3.12F, 2.0F, 4.5F, 2.0F)
          horizontalLineToRelative(3.0F)
          close()
          moveToRelative(1.0F, 0.0F)
          verticalLineToRelative(4.0F)
          curveToRelative(0.696F, -0.012F, 1.394F, 0.18F, 2.0F, 0.574F)
          curveToRelative(1.054F, -0.687F, 2.389F, -0.757F, 3.5F, -0.212F)
          verticalLineTo(4.5F)
          curveTo(14.0F, 3.12F, 12.88F, 2.0F, 11.5F, 2.0F)
          horizontalLineToRelative(-3.0F)
          close()
          moveToRelative(-1.0F, 4.0F)
          verticalLineToRelative(0.163F)
          curveTo(6.966F, 6.33F, 6.464F, 6.627F, 6.041F, 7.053F)
          curveToRelative(-1.388F, 1.398F, -1.388F, 3.663F, 0.0F, 5.062F)
          lineToRelative(1.459F, 1.47F)
          verticalLineTo(14.0F)
          horizontalLineToRelative(-3.0F)
          curveTo(3.12F, 14.0F, 2.0F, 12.88F, 2.0F, 11.5F)
          verticalLineTo(6.0F)
          horizontalLineToRelative(5.5F)
          close()
          moveToRelative(-0.749F, 5.41F)
          lineToRelative(3.43F, 3.457F)
          curveToRelative(0.177F, 0.177F, 0.461F, 0.177F, 0.637F, 0.0F)
          lineToRelative(3.431F, -3.457F)
          curveToRelative(1.001F, -1.008F, 1.001F, -2.644F, 0.0F, -3.653F)
          curveToRelative(-0.08F, -0.08F, -0.163F, -0.154F, -0.249F, -0.221F)
          curveToRelative(-0.979F, -0.76F, -2.378F, -0.712F, -3.302F, 0.148F)
          lineToRelative(-0.075F, 0.073F)
          lineTo(10.5F, 7.88F)
          lineToRelative(-0.123F, -0.123F)
          lineToRelative(-0.075F, -0.073F)
          curveTo(9.795F, 7.212F, 9.145F, 6.984F, 8.5F, 7.0F)
          curveToRelative(-0.342F, 0.008F, -0.683F, 0.085F, -1.0F, 0.231F)
          curveToRelative(-0.271F, 0.125F, -0.526F, 0.3F, -0.749F, 0.525F)
          curveToRelative(-1.001F, 1.009F, -1.001F, 2.645F, 0.0F, 3.653F)
          close()        
      }
    }
    return _boardHeart16!!
  }

private var _boardHeart16: ImageVector? = null
