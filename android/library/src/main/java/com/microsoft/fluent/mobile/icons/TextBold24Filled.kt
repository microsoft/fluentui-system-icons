package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.TextBold24: ImageVector
  get() {
    if (_textBold24 != null) {
      return _textBold24!!
    }
    _textBold24 = fluentIcon(name = "Filled.TextBold24", 24f) {
      materialPath {
          moveTo(6.0F, 5.75F)
          curveTo(6.0F, 4.784F, 6.784F, 4.0F, 7.75F, 4.0F)
          horizontalLineToRelative(4.749F)
          curveToRelative(2.823F, 0.0F, 4.751F, 2.34F, 4.751F, 4.75F)
          curveToRelative(0.0F, 0.931F, -0.288F, 1.852F, -0.803F, 2.632F)
          curveTo(17.369F, 12.239F, 18.0F, 13.47F, 18.0F, 15.0F)
          curveToRelative(0.0F, 3.133F, -2.677F, 5.0F, -5.0F, 5.0F)
          horizontalLineTo(7.75F)
          curveTo(6.784F, 20.0F, 6.0F, 19.216F, 6.0F, 18.25F)
          verticalLineTo(5.75F)
          close()
          moveToRelative(3.5F, 7.75F)
          verticalLineToRelative(3.0F)
          horizontalLineTo(13.0F)
          curveToRelative(0.312F, 0.0F, 0.71F, -0.138F, 1.024F, -0.421F)
          curveToRelative(0.288F, -0.26F, 0.476F, -0.615F, 0.476F, -1.079F)
          curveToRelative(0.0F, -0.888F, -0.745F, -1.5F, -1.5F, -1.5F)
          horizontalLineTo(9.5F)
          close()
          moveToRelative(0.0F, -3.5F)
          horizontalLineToRelative(3.0F)
          curveToRelative(0.715F, 0.0F, 1.25F, -0.592F, 1.25F, -1.25F)
          curveToRelative(0.0F, -0.657F, -0.536F, -1.25F, -1.251F, -1.25F)
          horizontalLineTo(9.5F)
          verticalLineTo(10.0F)
          close()        
      }
    }
    return _textBold24!!
  }

private var _textBold24: ImageVector? = null
