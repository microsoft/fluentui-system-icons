package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Note48: ImageVector
  get() {
    if (_note48 != null) {
      return _note48!!
    }
    _note48 = fluentIcon(name = "Regular.Note48", 48f) {
      materialPath {
          moveTo(12.25F, 6.0F)
          curveTo(8.798F, 6.0F, 6.0F, 8.798F, 6.0F, 12.25F)
          verticalLineToRelative(23.5F)
          curveTo(6.0F, 39.202F, 8.798F, 42.0F, 12.25F, 42.0F)
          horizontalLineToRelative(13.679F)
          curveToRelative(1.658F, 0.0F, 3.247F, -0.658F, 4.42F, -1.83F)
          lineToRelative(9.82F, -9.822F)
          curveTo(41.342F, 29.176F, 42.0F, 27.587F, 42.0F, 25.928F)
          verticalLineTo(12.25F)
          curveTo(42.0F, 8.798F, 39.202F, 6.0F, 35.75F, 6.0F)
          horizontalLineToRelative(-23.5F)
          close()
          moveTo(8.5F, 12.25F)
          curveToRelative(0.0F, -2.071F, 1.679F, -3.75F, 3.75F, -3.75F)
          horizontalLineToRelative(23.5F)
          curveToRelative(2.071F, 0.0F, 3.75F, 1.679F, 3.75F, 3.75F)
          verticalLineTo(26.0F)
          horizontalLineToRelative(-7.25F)
          curveTo(28.798F, 26.0F, 26.0F, 28.798F, 26.0F, 32.25F)
          verticalLineToRelative(7.25F)
          horizontalLineTo(12.25F)
          curveToRelative(-2.071F, 0.0F, -3.75F, -1.679F, -3.75F, -3.75F)
          verticalLineToRelative(-23.5F)
          close()
          moveToRelative(20.0F, 26.23F)
          verticalLineToRelative(-6.23F)
          curveToRelative(0.0F, -2.071F, 1.679F, -3.75F, 3.75F, -3.75F)
          horizontalLineToRelative(6.23F)
          lineToRelative(-0.078F, 0.08F)
          lineToRelative(-9.821F, 9.822F)
          lineTo(28.5F, 38.48F)
          close()        
      }
    }
    return _note48!!
  }

private var _note48: ImageVector? = null
