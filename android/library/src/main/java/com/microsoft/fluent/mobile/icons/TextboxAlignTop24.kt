package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.TextboxAlignTop24: ImageVector
  get() {
    if (_textboxAlignTop24 != null) {
      return _textboxAlignTop24!!
    }
    _textboxAlignTop24 = fluentIcon(name = "Regular.TextboxAlignTop24", 24f) {
      materialPath {
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
          moveToRelative(1.0F, 3.0F)
          horizontalLineToRelative(10.5F)
          curveTo(17.664F, 7.5F, 18.0F, 7.836F, 18.0F, 8.25F)
          curveToRelative(0.0F, 0.38F, -0.282F, 0.694F, -0.648F, 0.743F)
          lineTo(17.25F, 9.0F)
          horizontalLineTo(6.75F)
          curveTo(6.336F, 9.0F, 6.0F, 8.664F, 6.0F, 8.25F)
          curveToRelative(0.0F, -0.38F, 0.282F, -0.694F, 0.648F, -0.743F)
          lineTo(6.75F, 7.5F)
          close()
          moveToRelative(10.5F, 3.0F)
          horizontalLineTo(6.75F)
          lineToRelative(-0.102F, 0.007F)
          curveTo(6.282F, 10.557F, 6.0F, 10.87F, 6.0F, 11.25F)
          curveTo(6.0F, 11.664F, 6.336F, 12.0F, 6.75F, 12.0F)
          horizontalLineToRelative(10.5F)
          lineToRelative(0.102F, -0.007F)
          curveTo(17.718F, 11.943F, 18.0F, 11.63F, 18.0F, 11.25F)
          curveToRelative(0.0F, -0.414F, -0.336F, -0.75F, -0.75F, -0.75F)
          close()        
      }
    }
    return _textboxAlignTop24!!
  }

private var _textboxAlignTop24: ImageVector? = null
