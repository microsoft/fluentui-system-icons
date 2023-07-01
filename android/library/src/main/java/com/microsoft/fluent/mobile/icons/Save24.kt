package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Save24: ImageVector
  get() {
    if (_save24 != null) {
      return _save24!!
    }
    _save24 = fluentIcon(name = "Filled.Save24", 24f) {
      materialPath {
          moveTo(6.75F, 3.0F)
          horizontalLineToRelative(-1.0F)
          curveTo(4.231F, 3.0F, 3.0F, 4.231F, 3.0F, 5.75F)
          verticalLineToRelative(12.5F)
          curveTo(3.0F, 19.769F, 4.231F, 21.0F, 5.75F, 21.0F)
          horizontalLineTo(6.0F)
          verticalLineToRelative(-6.0F)
          curveToRelative(0.0F, -1.243F, 1.007F, -2.25F, 2.25F, -2.25F)
          horizontalLineToRelative(7.5F)
          curveToRelative(1.243F, 0.0F, 2.25F, 1.007F, 2.25F, 2.25F)
          verticalLineToRelative(6.0F)
          horizontalLineToRelative(0.25F)
          curveToRelative(1.519F, 0.0F, 2.75F, -1.231F, 2.75F, -2.75F)
          verticalLineTo(8.286F)
          curveToRelative(0.0F, -0.862F, -0.342F, -1.69F, -0.952F, -2.299F)
          lineToRelative(-2.035F, -2.035F)
          curveTo(17.41F, 3.35F, 16.599F, 3.01F, 15.75F, 3.0F)
          verticalLineToRelative(4.5F)
          curveToRelative(0.0F, 1.243F, -1.007F, 2.25F, -2.25F, 2.25F)
          horizontalLineTo(9.0F)
          curveToRelative(-1.243F, 0.0F, -2.25F, -1.007F, -2.25F, -2.25F)
          verticalLineTo(3.0F)
          close()
          moveToRelative(7.5F, 0.0F)
          verticalLineToRelative(4.5F)
          curveToRelative(0.0F, 0.414F, -0.336F, 0.75F, -0.75F, 0.75F)
          horizontalLineTo(9.0F)
          curveToRelative(-0.414F, 0.0F, -0.75F, -0.336F, -0.75F, -0.75F)
          verticalLineTo(3.0F)
          horizontalLineToRelative(6.0F)
          close()
          moveToRelative(2.25F, 18.0F)
          verticalLineToRelative(-6.0F)
          curveToRelative(0.0F, -0.414F, -0.336F, -0.75F, -0.75F, -0.75F)
          horizontalLineToRelative(-7.5F)
          curveToRelative(-0.414F, 0.0F, -0.75F, 0.336F, -0.75F, 0.75F)
          verticalLineToRelative(6.0F)
          horizontalLineToRelative(9.0F)
          close()        
      }
    }
    return _save24!!
  }

private var _save24: ImageVector? = null
