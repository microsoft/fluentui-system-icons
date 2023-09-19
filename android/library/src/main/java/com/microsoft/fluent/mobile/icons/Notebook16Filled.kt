package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Notebook16: ImageVector
  get() {
    if (_notebook16 != null) {
      return _notebook16!!
    }
    _notebook16 = fluentIcon(name = "Filled.Notebook16", 16f) {
      materialPath {
          moveTo(3.75F, 1.0F)
          curveTo(2.784F, 1.0F, 2.0F, 1.784F, 2.0F, 2.75F)
          verticalLineToRelative(10.5F)
          curveTo(2.0F, 14.216F, 2.784F, 15.0F, 3.75F, 15.0F)
          horizontalLineToRelative(7.5F)
          curveToRelative(0.966F, 0.0F, 1.75F, -0.784F, 1.75F, -1.75F)
          verticalLineTo(2.75F)
          curveTo(13.0F, 1.784F, 12.216F, 1.0F, 11.25F, 1.0F)
          horizontalLineToRelative(-7.5F)
          close()
          moveTo(4.0F, 3.75F)
          curveTo(4.0F, 3.336F, 4.336F, 3.0F, 4.75F, 3.0F)
          horizontalLineToRelative(5.5F)
          curveTo(10.664F, 3.0F, 11.0F, 3.336F, 11.0F, 3.75F)
          verticalLineToRelative(0.5F)
          curveTo(11.0F, 4.664F, 10.664F, 5.0F, 10.25F, 5.0F)
          horizontalLineToRelative(-5.5F)
          curveTo(4.336F, 5.0F, 4.0F, 4.664F, 4.0F, 4.25F)
          verticalLineToRelative(-0.5F)
          close()
          moveTo(14.0F, 4.0F)
          horizontalLineToRelative(0.625F)
          curveTo(14.832F, 4.0F, 15.0F, 4.168F, 15.0F, 4.375F)
          verticalLineToRelative(1.25F)
          curveTo(15.0F, 5.832F, 14.832F, 6.0F, 14.625F, 6.0F)
          horizontalLineTo(14.0F)
          verticalLineTo(4.0F)
          close()
          moveToRelative(0.625F, 3.0F)
          horizontalLineTo(14.0F)
          verticalLineToRelative(2.0F)
          horizontalLineToRelative(0.625F)
          curveTo(14.832F, 9.0F, 15.0F, 8.832F, 15.0F, 8.625F)
          verticalLineToRelative(-1.25F)
          curveTo(15.0F, 7.168F, 14.832F, 7.0F, 14.625F, 7.0F)
          close()
          moveTo(14.0F, 10.0F)
          horizontalLineToRelative(0.625F)
          curveTo(14.832F, 10.0F, 15.0F, 10.168F, 15.0F, 10.375F)
          verticalLineToRelative(1.25F)
          curveTo(15.0F, 11.832F, 14.832F, 12.0F, 14.625F, 12.0F)
          horizontalLineTo(14.0F)
          verticalLineToRelative(-2.0F)
          close()        
      }
    }
    return _notebook16!!
  }

private var _notebook16: ImageVector? = null
