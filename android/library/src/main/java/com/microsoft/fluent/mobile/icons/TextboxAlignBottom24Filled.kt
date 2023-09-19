package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.TextboxAlignBottom24: ImageVector
  get() {
    if (_textboxAlignBottom24 != null) {
      return _textboxAlignBottom24!!
    }
    _textboxAlignBottom24 = fluentIcon(name = "Filled.TextboxAlignBottom24", 24f) {
      materialPath {
          moveTo(18.25F, 3.0F)
          curveTo(19.769F, 3.0F, 21.0F, 4.231F, 21.0F, 5.75F)
          verticalLineToRelative(12.5F)
          curveToRelative(0.0F, 1.519F, -1.231F, 2.75F, -2.75F, 2.75F)
          horizontalLineTo(5.75F)
          curveTo(4.231F, 21.0F, 3.0F, 19.769F, 3.0F, 18.25F)
          verticalLineTo(5.75F)
          curveTo(3.0F, 4.231F, 4.231F, 3.0F, 5.75F, 3.0F)
          horizontalLineToRelative(12.5F)
          close()
          moveTo(6.75F, 13.5F)
          lineToRelative(-0.102F, 0.007F)
          curveTo(6.282F, 13.557F, 6.0F, 13.87F, 6.0F, 14.25F)
          curveTo(6.0F, 14.664F, 6.336F, 15.0F, 6.75F, 15.0F)
          horizontalLineToRelative(10.5F)
          lineToRelative(0.102F, -0.007F)
          curveTo(17.718F, 14.943F, 18.0F, 14.63F, 18.0F, 14.25F)
          curveToRelative(0.0F, -0.414F, -0.336F, -0.75F, -0.75F, -0.75F)
          horizontalLineTo(6.75F)
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
      }
    }
    return _textboxAlignBottom24!!
  }

private var _textboxAlignBottom24: ImageVector? = null
