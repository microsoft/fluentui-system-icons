package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Image24: ImageVector
  get() {
    if (_image24 != null) {
      return _image24!!
    }
    _image24 = fluentIcon(name = "Filled.Image24", 24f) {
      materialPath {
          moveTo(11.558F, 13.647F)
          lineToRelative(-0.083F, 0.07F)
          lineToRelative(-6.928F, 6.802F)
          curveTo(5.042F, 20.824F, 5.626F, 21.0F, 6.25F, 21.0F)
          horizontalLineToRelative(11.5F)
          curveToRelative(0.625F, 0.0F, 1.208F, -0.176F, 1.703F, -0.481F)
          lineToRelative(-6.928F, -6.801F)
          lineToRelative(-0.093F, -0.078F)
          curveToRelative(-0.261F, -0.185F, -0.615F, -0.182F, -0.874F, 0.007F)
          close()
          moveTo(21.0F, 6.25F)
          curveTo(21.0F, 4.455F, 19.545F, 3.0F, 17.75F, 3.0F)
          horizontalLineTo(6.25F)
          curveTo(4.455F, 3.0F, 3.0F, 4.455F, 3.0F, 6.25F)
          verticalLineToRelative(11.5F)
          curveToRelative(0.0F, 0.627F, 0.178F, 1.213F, 0.485F, 1.71F)
          lineToRelative(6.939F, -6.813F)
          lineToRelative(0.135F, -0.122F)
          curveToRelative(0.835F, -0.698F, 2.056F, -0.696F, 2.889F, 0.006F)
          lineToRelative(0.128F, 0.117F)
          lineToRelative(6.939F, 6.811F)
          curveTo(20.822F, 18.963F, 21.0F, 18.377F, 21.0F, 17.75F)
          verticalLineTo(6.25F)
          close()
          moveToRelative(-5.75F, 4.5F)
          curveToRelative(-1.105F, 0.0F, -2.0F, -0.895F, -2.0F, -2.0F)
          reflectiveCurveToRelative(0.895F, -2.0F, 2.0F, -2.0F)
          reflectiveCurveToRelative(2.0F, 0.895F, 2.0F, 2.0F)
          reflectiveCurveToRelative(-0.895F, 2.0F, -2.0F, 2.0F)
          close()        
      }
    }
    return _image24!!
  }

private var _image24: ImageVector? = null
