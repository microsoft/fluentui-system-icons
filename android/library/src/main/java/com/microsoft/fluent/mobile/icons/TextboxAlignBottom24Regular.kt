package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.TextboxAlignBottom24: ImageVector
  get() {
    if (_textboxAlignBottom24 != null) {
      return _textboxAlignBottom24!!
    }
    _textboxAlignBottom24 = fluentIcon(name = "Regular.TextboxAlignBottom24", 24f) {
      materialPath {
          moveTo(6.75F, 13.5F)
          horizontalLineToRelative(10.5F)
          curveToRelative(0.414F, 0.0F, 0.75F, 0.336F, 0.75F, 0.75F)
          curveToRelative(0.0F, 0.38F, -0.282F, 0.694F, -0.648F, 0.743F)
          lineTo(17.25F, 15.0F)
          horizontalLineTo(6.75F)
          curveTo(6.336F, 15.0F, 6.0F, 14.664F, 6.0F, 14.25F)
          curveToRelative(0.0F, -0.38F, 0.282F, -0.694F, 0.648F, -0.743F)
          lineTo(6.75F, 13.5F)
          close()
          moveToRelative(10.5F, 3.0F)
          horizontalLineTo(6.75F)
          lineToRelative(-0.102F, 0.007F)
          curveTo(6.282F, 16.557F, 6.0F, 16.87F, 6.0F, 17.25F)
          curveTo(6.0F, 17.664F, 6.336F, 18.0F, 6.75F, 18.0F)
          horizontalLineToRelative(10.5F)
          lineToRelative(0.102F, -0.007F)
          curveTo(17.718F, 17.943F, 18.0F, 17.63F, 18.0F, 17.25F)
          curveToRelative(0.0F, -0.414F, -0.336F, -0.75F, -0.75F, -0.75F)
          close()
          moveTo(21.0F, 5.75F)
          curveTo(21.0F, 4.231F, 19.769F, 3.0F, 18.25F, 3.0F)
          horizontalLineTo(5.75F)
          curveTo(4.231F, 3.0F, 3.0F, 4.231F, 3.0F, 5.75F)
          verticalLineToRelative(12.5F)
          curveTo(3.0F, 19.769F, 4.231F, 21.0F, 5.75F, 21.0F)
          horizontalLineToRelative(12.5F)
          curveToRelative(1.519F, 0.0F, 2.75F, -1.231F, 2.75F, -2.75F)
          verticalLineTo(5.75F)
          close()
          moveTo(5.75F, 4.5F)
          horizontalLineToRelative(12.5F)
          curveToRelative(0.69F, 0.0F, 1.25F, 0.56F, 1.25F, 1.25F)
          verticalLineToRelative(12.5F)
          curveToRelative(0.0F, 0.69F, -0.56F, 1.25F, -1.25F, 1.25F)
          horizontalLineTo(5.75F)
          curveToRelative(-0.69F, 0.0F, -1.25F, -0.56F, -1.25F, -1.25F)
          verticalLineTo(5.75F)
          curveToRelative(0.0F, -0.69F, 0.56F, -1.25F, 1.25F, -1.25F)
          close()        
      }
    }
    return _textboxAlignBottom24!!
  }

private var _textboxAlignBottom24: ImageVector? = null
