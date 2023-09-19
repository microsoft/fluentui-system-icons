package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.SpeakerOff20: ImageVector
  get() {
    if (_speakerOff20 != null) {
      return _speakerOff20!!
    }
    _speakerOff20 = fluentIcon(name = "Filled.SpeakerOff20", 20f) {
      materialPath {
          moveTo(2.853F, 2.147F)
          curveToRelative(-0.195F, -0.196F, -0.511F, -0.196F, -0.707F, 0.0F)
          curveToRelative(-0.195F, 0.195F, -0.195F, 0.511F, 0.0F, 0.707F)
          lineTo(5.293F, 6.0F)
          horizontalLineTo(3.5F)
          curveTo(2.672F, 6.0F, 2.0F, 6.672F, 2.0F, 7.5F)
          verticalLineToRelative(5.0F)
          curveTo(2.0F, 13.328F, 2.672F, 14.0F, 3.5F, 14.0F)
          horizontalLineToRelative(2.607F)
          curveToRelative(0.127F, 0.0F, 0.248F, 0.048F, 0.34F, 0.133F)
          lineToRelative(3.873F, 3.594F)
          curveToRelative(0.64F, 0.594F, 1.68F, 0.14F, 1.68F, -0.733F)
          verticalLineToRelative(-4.287F)
          lineToRelative(5.146F, 5.147F)
          curveToRelative(0.196F, 0.195F, 0.512F, 0.195F, 0.708F, 0.0F)
          curveToRelative(0.195F, -0.196F, 0.195F, -0.512F, 0.0F, -0.708F)
          lineToRelative(-2.565F, -2.564F)
          lineTo(2.854F, 2.146F)
          close()
          moveToRelative(13.107F, 2.52F)
          curveToRelative(2.476F, 2.763F, 2.695F, 6.833F, 0.656F, 9.828F)
          lineToRelative(-0.721F, -0.722F)
          curveToRelative(1.669F, -2.603F, 1.442F, -6.07F, -0.68F, -8.44F)
          curveToRelative(-0.184F, -0.205F, -0.167F, -0.521F, 0.039F, -0.705F)
          curveToRelative(0.205F, -0.185F, 0.521F, -0.167F, 0.706F, 0.038F)
          close()
          moveToRelative(-1.2F, 2.583F)
          curveToRelative(1.004F, 1.738F, 0.95F, 3.796F, 0.041F, 5.43F)
          lineToRelative(-0.742F, -0.742F)
          curveToRelative(0.615F, -1.293F, 0.604F, -2.856F, -0.165F, -4.188F)
          curveToRelative(-0.138F, -0.24F, -0.056F, -0.545F, 0.183F, -0.683F)
          curveToRelative(0.24F, -0.138F, 0.545F, -0.056F, 0.683F, 0.183F)
          close()
          moveTo(12.0F, 3.006F)
          verticalLineTo(9.88F)
          lineTo(7.247F, 5.125F)
          lineToRelative(3.073F, -2.852F)
          curveTo(10.96F, 1.68F, 12.0F, 2.133F, 12.0F, 3.006F)
          close()        
      }
    }
    return _speakerOff20!!
  }

private var _speakerOff20: ImageVector? = null
