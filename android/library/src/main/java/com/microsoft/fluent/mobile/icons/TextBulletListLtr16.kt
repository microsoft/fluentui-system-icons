package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.TextBulletListLtr16: ImageVector
  get() {
    if (_textBulletListLtr16 != null) {
      return _textBulletListLtr16!!
    }
    _textBulletListLtr16 = fluentIcon(name = "Filled.TextBulletListLtr16", 16f) {
      materialPath {
          moveTo(2.25F, 5.0F)
          curveTo(2.94F, 5.0F, 3.5F, 4.44F, 3.5F, 3.75F)
          reflectiveCurveTo(2.94F, 2.5F, 2.25F, 2.5F)
          reflectiveCurveTo(1.0F, 3.06F, 1.0F, 3.75F)
          reflectiveCurveTo(1.56F, 5.0F, 2.25F, 5.0F)
          close()
          moveToRelative(0.0F, 4.25F)
          curveTo(2.94F, 9.25F, 3.5F, 8.69F, 3.5F, 8.0F)
          reflectiveCurveTo(2.94F, 6.75F, 2.25F, 6.75F)
          reflectiveCurveTo(1.0F, 7.31F, 1.0F, 8.0F)
          reflectiveCurveToRelative(0.56F, 1.25F, 1.25F, 1.25F)
          close()
          moveToRelative(1.25F, 3.0F)
          curveToRelative(0.0F, 0.69F, -0.56F, 1.25F, -1.25F, 1.25F)
          reflectiveCurveTo(1.0F, 12.94F, 1.0F, 12.25F)
          reflectiveCurveTo(1.56F, 11.0F, 2.25F, 11.0F)
          reflectiveCurveToRelative(1.25F, 0.56F, 1.25F, 1.25F)
          close()
          moveTo(5.75F, 3.0F)
          curveTo(5.336F, 3.0F, 5.0F, 3.336F, 5.0F, 3.75F)
          reflectiveCurveTo(5.336F, 4.5F, 5.75F, 4.5F)
          horizontalLineToRelative(8.5F)
          curveTo(14.664F, 4.5F, 15.0F, 4.164F, 15.0F, 3.75F)
          reflectiveCurveTo(14.664F, 3.0F, 14.25F, 3.0F)
          horizontalLineToRelative(-8.5F)
          close()
          moveTo(5.0F, 8.0F)
          curveToRelative(0.0F, -0.414F, 0.336F, -0.75F, 0.75F, -0.75F)
          horizontalLineToRelative(8.5F)
          curveTo(14.664F, 7.25F, 15.0F, 7.586F, 15.0F, 8.0F)
          reflectiveCurveToRelative(-0.336F, 0.75F, -0.75F, 0.75F)
          horizontalLineToRelative(-8.5F)
          curveTo(5.336F, 8.75F, 5.0F, 8.414F, 5.0F, 8.0F)
          close()
          moveToRelative(0.75F, 3.5F)
          curveTo(5.336F, 11.5F, 5.0F, 11.836F, 5.0F, 12.25F)
          reflectiveCurveTo(5.336F, 13.0F, 5.75F, 13.0F)
          horizontalLineToRelative(8.5F)
          curveToRelative(0.414F, 0.0F, 0.75F, -0.336F, 0.75F, -0.75F)
          reflectiveCurveToRelative(-0.336F, -0.75F, -0.75F, -0.75F)
          horizontalLineToRelative(-8.5F)
          close()        
      }
    }
    return _textBulletListLtr16!!
  }

private var _textBulletListLtr16: ImageVector? = null
